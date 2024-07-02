import { bootstrapHandler } from "./server/bootstrap";

export default async (plugin) => {
  return new Proxy(plugin, {
    get(target, prop) {
      if (prop === "bootstrap") {
        return bootstrapHandler(plugin.bootstrap);
      }

      return target[prop];
    },
  });
};