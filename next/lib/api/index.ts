import { Assets } from "./Assets";
import * as ApiTypes from "./data-contracts";
import { Items } from "./Items";
import { Server } from "./Server";

const Api = new Items({
  // baseUrl: process.env.PUBLIC_URL,
  baseUrl: "http://localhost:1337",
});

export { Assets, ApiTypes, Api, Server };
