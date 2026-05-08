# ape-dev.de

Marketing site for **Ape Dev GmbH**. Built with [Statamic 6](https://statamic.com)
on Laravel 12 / PHP 8.5, served via FrankenPHP + Octane.

## Layout

```
.
├── statamic/          # The actual app (Statamic + Laravel)
├── Dockerfile         # FrankenPHP runtime build
├── Makefile           # Docker registry build/push targets
└── .planning/         # Design specs, security audits, migration proposals
```

The `statamic/` subdirectory is the application root. Everything below — `composer.json`,
`resources/`, `content/`, `public/` — lives there.

## Local development

```bash
cd statamic
composer install
npm install && npm run build
php artisan key:generate         # one-time
php please make:user             # one-time, for /cp access
php artisan serve                # http://127.0.0.1:8000
```

Form submissions land in `storage/forms/kontakt/` plus get mailed to the address
in `resources/forms/kontakt.yaml`. The contact form uses ALTCHA proof-of-work
(server endpoint at `/altcha/challenge`).

## Deployment

Docker image built via `make push` ships a multi-stage Dockerfile:

- Stage 1 (`registry.ape-dev.de/websites/statamic-base:builder`):
  composer install, `php artisan {config,route,view}:cache`
- Stage 2 (`registry.ape-dev.de/websites/statamic-base:latest`):
  distroless chainguard/static + FrankenPHP, runs as nonroot UID 65532
- CMD: `php-server --listen=:80 --root=/app/public --access-log`

The shared `statamic-base` image is built by the infra Concourse pipeline
(`pipelines/websites/_statamic-base/`). See `.planning/statamic-base/` for the
files needed there. Until that pipeline runs once, `docker build .` from this
repo will fail at the FROM line — by design.

## Hidden directories

- `.planning/` — design tokens, palette spec, security stack table, legal audit,
  base-image proposal. Reference, not built into the app.
- `.github/` — workflow stubs (currently disabled; deploy goes via Concourse).
- `.idea/` — JetBrains IDE config (not under git).

## License

Proprietary, © Ape Dev GmbH.
