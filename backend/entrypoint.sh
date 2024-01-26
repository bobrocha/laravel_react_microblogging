#!/bin/bash
app_dir="$(pwd)/html"

#  Since docker compose uses volumn mounts this will exist, delete to prevent problems
#  when building the conainers multiple times
if [ -f "$app_dir/.env" ]; then
    rm "$app_dir/.env"
fi

if [ ! -f "$app_dir/.env" ]; then
    cp "$app_dir/.env.example" "$app_dir/.env";
    composer install -d "$app_dir"
    php "$app_dir/artisan" key:generate --ansi
    php "$app_dir/artisan" migrate
fi

php-fpm
