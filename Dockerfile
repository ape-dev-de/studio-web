# syntax=docker/dockerfile:1.6
#
# ape-dev.de — Statamic site, two-stage build atop websites/statamic-base.
# Build stage uses :builder (Wolfi + apk + composer + PHP CLI). Runtime stage
# uses :latest (chainguard/static + FrankenPHP, distroless, nonroot 65532).

# ---- Build stage: composer install + cache prep ----------------------------
FROM registry.ape-dev.de/websites/statamic-base:builder AS build

WORKDIR /app
COPY --link statamic/ /app

# Composer install ohne dev-deps, optimierter Autoloader.
RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist

# Statamic-/Laravel-Caches vorbacken (kein Schreibzugriff zur Runtime nötig).
RUN php artisan config:cache \
 && php artisan route:cache \
 && php artisan view:cache \
 && php artisan icons:cache || true   # Statamic-only, ignoriere fail wenn keine Icons-Sets registriert

# Storage- und Bootstrap-cache-Verzeichnisse sicherstellen (Octane-Worker schreibt dort).
RUN mkdir -p storage/framework/{cache,sessions,views} bootstrap/cache public/static \
 && chmod -R 775 storage bootstrap/cache public/static

# ---- Vite assets in einem parallelen Stage --------------------------------
FROM registry.ape-dev.de/mirror/chainguard/node:latest AS assets

WORKDIR /app
COPY statamic/package.json statamic/package-lock.json ./
RUN npm ci --silent
COPY statamic/ ./
RUN npm run build

# ---- Runtime stage: distroless FrankenPHP ---------------------------------
FROM registry.ape-dev.de/websites/statamic-base:latest

# UID 65532:65532 ist der `nonroot`-User aus chainguard/static.
COPY --from=build   --chown=65532:65532 /app /app
COPY --from=assets  --chown=65532:65532 /app/public/build /app/public/build

ENV APP_ENV=production \
    APP_DEBUG=false \
    LOG_CHANNEL=stderr \
    STATAMIC_STATIC_CACHING_STRATEGY=full \
    SERVER_NAME=":80"

# Octane unter FrankenPHP. Worker-Mode mit php-server-Pattern (Symlink in der Base
# zeigt php-server → frankenphp).
EXPOSE 80
USER 65532:65532
CMD ["php-server", "--listen=:80", "--root=/app/public", "--access-log"]
