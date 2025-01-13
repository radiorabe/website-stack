docker compose stop telegram-notifier
docker compose rm -f telegram-notifier
docker compose up -d --no-deps --build telegram-notifier
