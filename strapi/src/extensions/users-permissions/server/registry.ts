export const doRegisterKeycloakProvider = ({ strapi }) => {
    const providersRegistry = strapi.service(
      "plugin::users-permissions.providers-registry"
    );
  
    providersRegistry.register("keycloak", ({ purest }) => {
      return async ({ accessToken }) => {
        const pluginStore = strapi.store({
          type: "plugin",
          name: "users-permissions",
        });
        const storedGrantConfig = (await pluginStore.get({ key: "grant" })) || {};
        const keycloak = purest({
          provider: "keycloak",
        });
        return keycloak
          .subdomain(storedGrantConfig.keycloak.subdomain)
          .get("protocol/openid-connect/userinfo")
          .auth(accessToken)
          .request()
          .then(({ body }: { body: any }) => ({
            username: body["preferred_username"],
            email: body.email,
          }));
      };
    });
  };