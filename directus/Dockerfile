FROM directus/directus:11.15.2

USER root
RUN corepack enable
USER node

WORKDIR /directus

COPY healthcheck.mjs ./healthcheck.mjs

RUN pnpm install directus-extension-blurhasher

HEALTHCHECK --interval=12s --timeout=12s --start-period=30s CMD node healthcheck.mjs