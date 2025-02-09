# RaBe Webseite

Frontend: Nextjs with react-native-web

Backend: Directus

# Docker

Postgres DB:

    docker-compose up -d DB

Directus:

    docker-compose up -d directus

Next:

    docker-compose up -d next

## Build Process

The CI/CD setup uses [Docker build-push Action](https://github.com/docker/build-push-action) to publish container images.
The workflow is based on the [RaBe shared actions](https://radiorabe.github.io/actions/).
