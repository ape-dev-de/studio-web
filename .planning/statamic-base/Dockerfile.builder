# syntax=docker/dockerfile:1.6
#
# websites/statamic-base:builder — Build-side image for Statamic-site Dockerfiles.
#
# Wolfi-based, root-by-default. Contains everything a Statamic-site build needs:
# PHP 8.5 + extensions, composer, node + npm. Build stage is intentionally root
# so consumer Dockerfiles can write into WORKDIR without permission gymnastics
# (matches the klarkonform/app-base + mirror-runner patterns; see
# pipelines/registry-mirror/ROOT-IMAGE-POLICY.md §3 for rationale).
#
# Runtime image (`:latest`) is the distroless one and runs as nonroot 65532.
# The build stage is throwaway: filesystem is squashed into the final image
# via `COPY --from=build --chown=65532:65532` in the consumer Dockerfile.
#
# Built by pipelines/websites/_statamic-base/. Pushed as:
#   registry.ape-dev.de/websites/statamic-base:builder

FROM registry.ape-dev.de/mirror/chainguard/wolfi-base:latest-dev

LABEL org.opencontainers.image.title="websites/statamic-base:builder" \
      org.opencontainers.image.description="Build-time image: Wolfi + PHP 8.5 + composer + node/npm for Statamic site builds" \
      org.opencontainers.image.source="https://github.com/ape-dev-de/infra" \
      org.opencontainers.image.licenses="proprietary" \
      org.opencontainers.image.vendor="ape dev"

# PHP 8.5 + every extension Statamic 6 + Laravel Octane actually need.
# Wolfi convention: subpackage names use underscores for compound extensions
# (pdo_mysql, pdo_sqlite). Built-in (opcache, openssl, session, tokenizer)
# live in the main php-8.5 package — no separate subpackage.
#
# Plus node/npm for Vite asset builds, plus composer + git + unzip.
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
        nodejs-22 \
        npm \
        ca-certificates-bundle \
        tzdata \
        git \
        unzip \
 && rm -rf /var/cache/apk/*

# Opcache + CLI-opcache + memory bumps. Useful for `php artisan config:cache`,
# `composer dump-autoload --optimize`, and any other build-time PHP work.
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

WORKDIR /app
# Stays as root — see ROOT-IMAGE-POLICY.md §3. The runtime image (:latest)
# enforces nonroot UID 65532; the build stage is squashed away during
# `COPY --from=build --chown=65532:65532` in the consumer Dockerfile.

CMD ["php", "--version"]
