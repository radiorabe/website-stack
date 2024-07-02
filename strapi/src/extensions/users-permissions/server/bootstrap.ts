import urlJoin from "url-join";
import { Bootstrap } from "@strapi/types/dist/types/core/plugins/config/strapi-server/lifecycle";

import { Plugin } from "@strapi/types";
import { doRegisterKeycloakProvider } from "./registry";

const getGrantConfig = (baseURL) => ({
  keycloak: {
    enabled: false,
    icon: "keycloak",
    key: "",
    secret: "",
    // subdomain: "localhost:8443/auth/realms/strapitest",
    subdomain:" https://sso.rabe.ch/auth/realms/rabe",
    callback: `${baseURL}/keycloak/callback`,
    scope: ["email"],
  },
});

export const bootstrapHandler = (bootstrap: Bootstrap): Bootstrap => {
  return async ({ strapi }) => {
    const pluginStore = strapi.store({
      type: "plugin",
      name: "users-permissions",
    });

    const storedGrantConfig =
      ((await pluginStore.get({ key: "grant" })) as Object) || {};
    await bootstrap({ strapi });
    const storedGrantConfigOnBootstrap =
      ((await pluginStore.get({ key: "grant" })) as Object) || {};

    const apiPrefix = strapi.config.get("api.rest.prefix");
    const baseURL = urlJoin(strapi.config.server.url, apiPrefix, "auth");
    const grantConfig = getGrantConfig(baseURL);

    const newGrantConfig = {
      ...grantConfig,
      ...storedGrantConfigOnBootstrap,
      ...storedGrantConfig,
    };

    await pluginStore.set({
      key: "grant",
      value: newGrantConfig,
    });

    doRegisterKeycloakProvider({ strapi });
  };
};