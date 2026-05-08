# ape-dev-studio Mail-Deployment

Pattern für SMTP-Anbindung des Kontaktformulars: Vault-managed Passwort,
ConfigMap für nicht-geheime Mail-Configs, alles via `envFrom` in den Pod
injected. Kein `.env` im Image (`.dockerignore` filtert das schon raus).

## Was wo liegt

| Wert | Wo | Geheim? |
|---|---|---|
| `MAIL_MAILER=smtp` | ConfigMap | nein |
| `MAIL_HOST` | ConfigMap | nein (Hostname unseres Stalwart) |
| `MAIL_PORT=587` | ConfigMap | nein |
| `MAIL_ENCRYPTION=tls` | ConfigMap | nein |
| `MAIL_FROM_ADDRESS=noreply@ape-dev.de` | ConfigMap | nein |
| `MAIL_FROM_NAME="Ape Dev"` | ConfigMap | nein |
| `MAIL_USERNAME` | **Vault** → ESO → Secret | ja |
| `MAIL_PASSWORD` | **Vault** → ESO → Secret | ja |
| `APP_KEY` | **Vault** → ESO → Secret | ja |
| `STATAMIC_LICENSE_KEY` | **Vault** → ESO → Secret | ja (auch wenn Free, später relevant) |

Form-Empfänger (`info@ape-dev.de`) und Form-From (`noreply@ape-dev.de`) sind
in `statamic/resources/forms/kontakt.yaml` hardcoded — kein env-var nötig,
ist statische Application-Config.

## 1. Vault-Pfad anlegen

```bash
vault kv put secret/internal/ape-dev/studio \
    APP_KEY="base64:$(openssl rand -base64 32)" \
    STATAMIC_LICENSE_KEY="" \
    MAIL_USERNAME="noreply@ape-dev.de" \
    MAIL_PASSWORD="<aus Stalwart-Mailserver-Setup>"
```

(`STATAMIC_LICENSE_KEY` kann leer bleiben solange Free-Mode aktiv ist —
`STATAMIC_PRO_ENABLED=false` in der ConfigMap.)

## 2. ConfigMap (commitable, kein Geheimnis)

```yaml
# infra/projects/ape-dev.de/configmap.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: ape-dev-studio-config
  namespace: ape-dev
data:
  # Laravel/Statamic
  APP_NAME: "Ape Dev"
  APP_ENV: "production"
  APP_DEBUG: "false"
  APP_URL: "https://ape-dev.de"
  APP_LOCALE: "de"
  APP_FALLBACK_LOCALE: "de"
  LOG_CHANNEL: "stderr"
  LOG_LEVEL: "warning"
  STATAMIC_PRO_ENABLED: "false"
  STATAMIC_STATIC_CACHING_STRATEGY: "full"

  # Mail (alle nicht-geheimen Mail-Werte)
  MAIL_MAILER: "smtp"
  MAIL_HOST: "mail.ape-dev.de"          # selbst gehosteter Stalwart
  MAIL_PORT: "587"
  MAIL_ENCRYPTION: "tls"
  MAIL_FROM_ADDRESS: "noreply@ape-dev.de"
  MAIL_FROM_NAME: "Ape Dev"

  # Octane / FrankenPHP
  OCTANE_SERVER: "frankenphp"
  SERVER_NAME: ":80"
```

## 3. ExternalSecret (commitable, referenziert Vault-Pfad)

```yaml
# infra/projects/ape-dev.de/external-secret.yaml
apiVersion: external-secrets.io/v1
kind: ExternalSecret
metadata:
  name: ape-dev-studio-env
  namespace: ape-dev
spec:
  refreshInterval: 1h
  secretStoreRef:
    name: vault-backend
    kind: ClusterSecretStore
  target:
    name: ape-dev-studio-env
    creationPolicy: Owner
  dataFrom:
    - extract:
        key: secret/internal/ape-dev/studio
```

ESO erzeugt daraus automatisch ein k8s Secret `ape-dev-studio-env` mit
allen Vault-Keys als Env-Var-Mapping.

## 4. Deployment-Patch

```yaml
# infra/projects/ape-dev.de/deployment.yaml
spec:
  template:
    spec:
      containers:
        - name: app
          image: registry.ape-dev.de/ape-dev-studio:latest
          envFrom:
            - configMapRef:
                name: ape-dev-studio-config    # nicht-geheime Werte
            - secretRef:
                name: ape-dev-studio-env       # geheime Werte (von ESO)
          ports:
            - containerPort: 80
          # ... rest (volumes, probes, resources etc.)
```

Beim Pod-Start mergt k8s ConfigMap + Secret zu env-vars. Laravel ruft
`env('MAIL_HOST')` → bekommt den Wert aus dem Container-Environment.

## 5. Smoke-Test nach Deploy

```bash
kubectl exec -n ape-dev deploy/ape-dev-studio -c app -- env | grep MAIL_
# Sollte alle MAIL_* mit echten Werten zeigen (PASSWORD natürlich nur Pwd-Hash-ähnlich)
```

Plus Form-Test: `https://ape-dev.de/kontakt` ausfüllen, abschicken. Mail
muss bei `info@ape-dev.de` ankommen, FROM-Header ist `noreply@ape-dev.de`.

## SMTP-Wechsel später

Drei Schritte:

```bash
# 1. Wert in Vault patchen
vault kv patch secret/internal/ape-dev/studio MAIL_PASSWORD="<neu>"

# 2. ESO sofort syncen lassen (statt 1h zu warten)
kubectl annotate externalsecret ape-dev-studio-env \
    -n ape-dev \
    force-sync=$(date +%s) --overwrite

# 3. Pod neu starten damit env-var neu eingelesen wird
kubectl rollout restart deploy/ape-dev-studio -n ape-dev
```

Image bleibt unverändert. Pipeline bleibt unangetastet.

## Was NICHT im Repo landet

- `MAIL_PASSWORD`, `APP_KEY`, `STATAMIC_LICENSE_KEY` → nur in Vault
- Vault-Token / Vault-Auth-Daten → nur im Cluster (ServiceAccount der ESO-Instanz)
- `kubectl`-Configs / Cluster-Credentials → nur lokal beim Operator

## Was im Repo landet

- `configmap.yaml` (alle public env-vars)
- `external-secret.yaml` (referenziert Vault-Pfad als String)
- `deployment.yaml` (referenziert ConfigMap + Secret als Namen)
- Plus Service, Ingress, Certificate (TLS via cert-manager) — Standard-Set für jede ape-dev-website.

Kein Geheimnis je im Git. Customer kann später (siehe `.planning/multi-tenant-secrets.md` falls vorhanden) selbst in Vault editieren — gleicher Pfad-Layout.
