import { Assets } from "./Assets";
import * as ApiTypes from "./data-contracts";
import { Items } from "./Items";
import { Server } from "./Server";

const Api = new Items({
  baseUrl: process.env.NEXT_PUBLIC_BE_URL,
});

export { Assets, ApiTypes, Api, Server };
