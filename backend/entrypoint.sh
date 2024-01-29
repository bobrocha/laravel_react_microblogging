#!/bin/bash
app_dir="$(pwd)/html"

chmod -R 777 "$app_dir/storage"
chmod -R 777 "$app_dir/bootstrap"

#  Since docker compose uses volumn mounts this will exist, delete to prevent problems
#  when building the conainers multiple times
if [ -f "$app_dir/.env" ]; then
    rm "$app_dir/.env"
fi

if [ ! -f "$app_dir/.env" ]; then
    cp "$app_dir/.env.example" "$app_dir/.env";
    composer install -d "$app_dir"
    php "$app_dir/artisan" key:generate --ansi
    npm install --prefix "$app_dir"
    php "$app_dir/artisan" migrate
fi

php-fpm
