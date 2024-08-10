/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { PingData, ServerInfoData, ServerInfoParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Server<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * @description Perform a system status check and return the options.
 *
 * @tags Server
 * @name ServerInfo
 * @summary System Info
 * @request GET:/server/info
 * @response `200` `ServerInfoData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 * @response `404` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  serverInfo = (query: ServerInfoParams, params: RequestParams = {}) =>
    this.request<
      ServerInfoData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/server/info`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Ping, pong. Ping.. pong.
   *
   * @tags Server
   * @name Ping
   * @summary Ping
   * @request GET:/server/ping
   * @response `200` `PingData` Successful request
   */
  ping = (params: RequestParams = {}) =>
    this.request<PingData, any>({
      path: `/server/ping`,
      method: "GET",
      ...params,
    });
}
