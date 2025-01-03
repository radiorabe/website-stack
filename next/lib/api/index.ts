import { Assets } from "./Assets";
import * as ApiTypes from "./data-contracts";
import { Items } from "./Items";
import { Server } from "./Server";
import { Users } from "./Users";

const Api = new Items({
  baseUrl: process.env.NEXT_PUBLIC_BE_URL,
});

let UserApi = new Users({
  baseUrl: process.env.NEXT_PUBLIC_BE_URL,
});

export { Api, ApiTypes, Assets, Server, UserApi };
