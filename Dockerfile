# syntax=docker/dockerfile:1.6
#
# ape-dev.de — Statamic site, two-stage build atop websites/statamic-base.
# Build stage uses :builder (Wolfi + PHP 8.5 + composer + node/npm, root).
# Runtime stage uses :latest (chainguard/static + FrankenPHP, distroless,
# nonroot 65532).

# ---- Build stage: composer + vite + cache prep ------------------------------
FROM registry.ape-dev.de/websites/statamic-base:builder AS build

WORKDIR /app
COPY --link statamic/ /app

# Statamic+Laravel-Verzeichnisse VOR composer install — package:discover
# (post-autoload-dump-Hook) schreibt nach bootstrap/cache/packages.php; ohne
# das Verzeichnis bricht der composer-Hook ab. Storage-Dirs gleich mit.
RUN mkdir -p \
        bootstrap/cache \
        storage/framework/cache \
        storage/framework/sessions \
        storage/framework/views \
        storage/logs \
        public/static \
 && chmod -R 775 bootstrap/cache storage public/static

# Composer: production deps only, optimized autoloader.
RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist

# Vite assets — node_modules wieder raus, gehört nicht ins runtime image.
RUN npm ci --silent \
 && npm run build \
 && rm -rf node_modules

# Statamic-/Laravel-Caches vorbacken — kein Schreibzugriff zur Runtime nötig.
RUN php artisan config:cache \
 && php artisan route:cache \
 && php artisan view:cache \
 && (php artisan icons:cache || true)   # Statamic-only, ignoriere fail wenn keine Icon-Sets registriert

# ---- Runtime stage: distroless FrankenPHP -----------------------------------
FROM registry.ape-dev.de/websites/statamic-base:latest

# UID 65532:65532 ist der `nonroot`-User aus chainguard/static.
# Build-Stage lief als root → hier mit --chown auf nonroot übertragen.
COPY --from=build --chown=65532:65532 /app /app

ENV APP_ENV=production \
    APP_DEBUG=false \
    LOG_CHANNEL=stderr \
    STATAMIC_STATIC_CACHING_STRATEGY=full \
    SERVER_NAME=":80"

EXPOSE 80
USER 65532:65532

# Octane via FrankenPHP — Worker-Mode mit php-server-Pattern.
# php-server ist ein busybox-style symlink auf frankenphp im :latest base.
CMD ["php-server", "--listen=:80", "--root=/app/public", "--access-log"]
