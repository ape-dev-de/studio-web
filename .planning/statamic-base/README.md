# websites/statamic-base

Curated runtime base for Statamic 6 + Laravel sites running under FrankenPHP.
**Two tags, two bases**:

| Tag | Base | Has shell? | Used for |
|---|---|---|---|
| `:builder` | `chainguard/wolfi-base:latest-dev` | yes (apk + sh) | composer install, `php artisan cache:*`, npm-style build steps in consumer Dockerfiles |
| `:latest` | `chainguard/static:latest` | **no** (distroless) | Final runtime, `php-server`-mode FrankenPHP, UID 65532 |

Consumer Dockerfile pattern:

```dockerfile
FROM registry.ape-dev.de/websites/statamic-base:builder AS build
WORKDIR /app
COPY --link . /app
# Build stage runs as root by default — see ROOT-IMAGE-POLICY.md §3.
RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist
RUN npm ci --silent && npm run build && rm -rf node_modules
RUN php artisan config:cache && php artisan route:cache && php artisan view:cache

FROM registry.ape-dev.de/websites/statamic-base:latest
COPY --from=build --chown=65532:65532 /app /app
EXPOSE 80
CMD ["php-server", "--listen=:80", "--root=/app/public", "--access-log"]
```

## What's baked in

### `:builder` (Wolfi + apk, root)
- `php-8.5` (Wolfi 8.5.6 at time of writing)
- Extensions: `bcmath, curl, dom, exif, fileinfo, gd, iconv, intl, mbstring, pcntl, pdo, pdo_mysql, pdo_sqlite, phar, simplexml, sodium, xml, xmlwriter, zip` — each as `php-8.5-<ext>` apk subpackage. Built-in (`opcache, openssl, session, tokenizer`) live in the core `php-8.5` package.
- `composer`, `nodejs-22`, `npm`, `git`, `unzip`, `ca-certificates-bundle`, `tzdata`
- Opcache + CLI-opcache enabled (speeds up `php artisan config:cache` etc.)
- **Runs as root** by default. Build stage is throwaway; the runtime image (`:latest`) enforces nonroot UID 65532 via the `COPY --from=build --chown=65532:65532` line in consumer Dockerfiles. Pattern matches `klarkonform/app-base` and `mirror-runner` (see `pipelines/registry-mirror/ROOT-IMAGE-POLICY.md` §3 for rationale).

### `:latest` (chainguard/static, distroless)
- FrankenPHP `v1.12.2` static glibc binary, mirrored as OCI artifact
- Symlinks: `/usr/bin/php`, `/usr/bin/php-cli`, `/usr/bin/php-server` all point to `frankenphp` (busybox-style argv[0]-dispatch)
- `/etc/frankenphp/php.ini` with opcache + JIT-tracing + production memory limits
- No apk, no PHP installed separately, no shell — only the FrankenPHP binary's embedded PHP serves requests at runtime

## Why two tags

`:builder` needs a writeable filesystem, shell, package manager — incompatible with distroless. `:latest` needs zero attack surface, no shell, no package manager. Building both off the same source dir keeps the relationship transparent.

The PHP versions in both tags should track each other: Wolfi `php-8.5` and FrankenPHP-embedded PHP must both be `^8.5`. The `frankenphp version` smoke-test in the runtime stage and `php --version` in the builder stage make drift visible.

## Manual rebuild (off-pipeline)

```bash
cd pipelines/websites/_statamic-base

docker build -t registry.ape-dev.de/websites/statamic-base:builder \
    -f Dockerfile.builder .

docker build -t registry.ape-dev.de/websites/statamic-base:latest \
    -f Dockerfile.runtime .

docker push registry.ape-dev.de/websites/statamic-base:builder
docker push registry.ape-dev.de/websites/statamic-base:latest
```

Requires that `registry.ape-dev.de/mirror/upstream/frankenphp:v1.12.2`,
`registry.ape-dev.de/mirror/chainguard/wolfi-base:latest-dev`, and
`registry.ape-dev.de/mirror/chainguard/static:latest` already exist in the
mirror.

## Triggers (Concourse)

Both `:builder` and `:latest` are rebuilt automatically on:

1. Change to either Dockerfile or `pipeline.yaml` (via the `infra-repo` resource path filter).
2. New digest on the corresponding upstream mirror:
   - `:builder` ← `wolfi-base-mirror` (rolling)
   - `:latest` ← `static-base-mirror` + `frankenphp-mirror`

Consumer pipelines (`pipelines/websites/<app>/`) gate `passed: [build-builder, build-runtime]` on their build job, so a base rebuild kicks the consumer rebuilds in turn.

## Consumers

`FROM registry.ape-dev.de/websites/statamic-base:{builder,latest}`:

- `pipelines/websites/ape-dev-studio/` — ape-dev.de
- `pipelines/websites/cesaris/` — *(future migration)*
- `pipelines/websites/demo-pages/` — *(future migration)*
- `pipelines/websites/festglanz/` — *(future migration)*

## Caveats

- **Wolfi rolling**: `wolfi-base:latest-dev` and `static:latest` are not version-pinned in the mirror — security updates flow automatically. Consumer `passed:` constraints catch breakage.
- **FrankenPHP version pin**: hard-pinned at `v1.12.2` in both `Dockerfile.runtime` and the `frankenphp-mirror` resource tag in `pipeline.yaml`. Bump both atomically.
- **glibc requirement**: FrankenPHP uses the `-gnu` static binary which links against glibc. chainguard/static is glibc-based, so this works. If we ever switch the runtime base to a musl distro, swap to the non-`-gnu` FrankenPHP variant.
- **PHP CLI in runtime**: the symlinked `php`/`php-cli` invokes FrankenPHP in PHP-CLI mode — usable for `php artisan` calls in init-containers. But for production, all `artisan` work happens in the build stage; the runtime image is read-only at the application level.
- **MongoDB / Redis PECL**: not included. If a future consumer needs them, fork the base or build a `:builder-extras` variant.

## File layout in the infra repo

```
pipelines/websites/_statamic-base/
├── Dockerfile.builder    # :builder tag
├── Dockerfile.runtime    # :latest tag
├── pipeline.yaml         # Concourse pipeline (two jobs)
└── README.md             # this file
```
