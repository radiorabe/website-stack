set -a; 
source .env; 
set +a

npx directus-sync pull

# npx directus-sync push --directus-url https://data.rabe.ch  --directus-token nyxxy5-kazMon-gusvuk
# npx directus-sync push --directus-url https://data.rabe.ch  --directus-token nyxxy5-kazMon-gusvuk