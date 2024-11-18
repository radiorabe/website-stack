import { generateApi } from "swagger-typescript-api";
import path from "node:path";
// import _ from "./env.mjs";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(process.cwd(), ".env.development") });

generateApi({
  // api": "swagger-typescript-api --responses --extract-request-body --extract-request-params --extract-response-body --extract-response-error -p http://localhost:1337/server/specs/oas -o ./lib/api --modular",
  output: path.resolve(process.cwd(), "./lib/api"),
  url: "http://localhost:1337/server/specs/oas",
  generateResponses: true,
  extractRequestParams: true,
  extractRequestBody: true,
  extractResponseParams: true,
  extractResponseBody: true,
  extractResponseError: true,
  modular: true,
  requestOptions: {
    headers: {
      Authorization: "Bearer " + process.env.DIRECTUS_API_KEY,
    },
  },
});
