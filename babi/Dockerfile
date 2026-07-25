# syntax=docker/dockerfile:1.7

#############################
# BUILD STAGE
#############################
FROM php:8.4-cli-alpine AS build

RUN apk add --no-cache \
        git \
        unzip \
        libzip-dev \
        libpng-dev \
        $PHPIZE_DEPS \
    && docker-php-ext-install \
        pdo_mysql \
        zip \
        pcntl

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

COPY composer.json composer.lock ./

RUN --mount=type=cache,target=/tmp/composer-cache \
    COMPOSER_CACHE_DIR=/tmp/composer-cache \
    composer install \
        --no-interaction \
        --prefer-dist \
        --no-scripts \
        --no-autoloader

COPY . .

RUN composer dump-autoload --optimize

#############################
# RUNTIME STAGE
#############################
FROM php:8.4-cli-alpine

RUN apk add --no-cache \
        libzip \
        libpng

COPY --from=build /usr/local/lib/php/extensions /usr/local/lib/php/extensions
COPY --from=build /usr/local/etc/php/conf.d /usr/local/etc/php/conf.d

WORKDIR /var/www/html

COPY --from=build /var/www/html .

EXPOSE 8000
CMD ["php","artisan","serve","--host=0.0.0.0","--port=8000","--no-reload"]
