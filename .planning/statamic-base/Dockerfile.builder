# syntax=docker/dockerfile:1.6
#
# websites/statamic-base:builder — Build-side image for Statamic-site Dockerfiles.
#
# Wolfi-based, has apk + shell + composer + PHP 8.5 + extensions explicitly installed.
# Used as `FROM ... AS build` in consumer Dockerfiles to run composer install,
# php artisan cache:* and similar build-time steps.
#
# Built by pipelines/websites/_statamic-base/. Pushed as
#   registry.ape-dev.de/websites/statamic-base:builder

FROM registry.ape-dev.de/mirror/chainguard/wolfi-base:latest-dev

LABEL org.opencontainers.image.title="websites/statamic-base:builder" \
      org.opencontainers.image.description="Build-time image: Wolfi + PHP 8.5 + composer for Statamic site builds" \
      org.opencontainers.image.source="https://github.com/ape-dev-de/infra" \
      org.opencontainers.image.licenses="proprietary" \
      org.opencontainers.image.vendor="ape dev"

# PHP 8.5 + every extension Statamic 6 + Laravel Octane actually need.
# Wolfi convention: subpackage names use underscores for compound extensions
# (pdo_mysql, pdo_sqlite). Built-in (opcache, openssl, session, tokenizer)
# live in the main php-8.5 package — no separate subpackage.
RUN apk add --no-cache \
        php-8.5 \
        php-8.5-bcmath \
        php-8.5-curl \
        php-8.5-dom \
        php-8.5-exif \
        php-8.5-fileinfo \
        php-8.5-gd \
        php-8.5-iconv \
        php-8.5-intl \
        php-8.5-mbstring \
        php-8.5-pcntl \
        php-8.5-pdo \
        php-8.5-pdo_mysql \
        php-8.5-pdo_sqlite \
        php-8.5-phar \
        php-8.5-simplexml \
        php-8.5-sodium \
        php-8.5-xml \
        php-8.5-xmlwriter \
        php-8.5-zip \
        composer \
        ca-certificates-bundle \
        tzdata \
        git \
        unzip \
 && rm -rf /var/cache/apk/*

# Octane-friendly opcache + JIT defaults — useful even for build-time
# `php artisan config:cache` calls.
RUN { \
        echo "opcache.enable=1"; \
        echo "opcache.enable_cli=1"; \
        echo "opcache.memory_consumption=192"; \
        echo "opcache.max_accelerated_files=20000"; \
        echo "opcache.validate_timestamps=0"; \
        echo "opcache.interned_strings_buffer=16"; \
    } > /etc/php/conf.d/zz-opcache.ini \
 && { \
        echo "expose_php=Off"; \
        echo "memory_limit=512M"; \
    } > /etc/php/conf.d/zz-prod.ini

# Match runtime image's nonroot user (chainguard/static = UID 65532).
# Consumer Dockerfiles can run composer install as nonroot here, then COPY
# --from=build owns files at the right UID for the runtime stage.
RUN addgroup -g 65532 nonroot && adduser -u 65532 -G nonroot -h /app -s /sbin/nologin -D nonroot \
 && chown -R nonroot:nonroot /app 2>/dev/null || true

WORKDIR /app
USER nonroot

CMD ["php", "--version"]
