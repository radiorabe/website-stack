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

import { GetAssetData, GetAssetParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Assets<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * @description Image typed files can be dynamically resized and transformed to fit any need.
 *
 * @tags Assets
 * @name GetAsset
 * @summary Get an Asset
 * @request GET:/assets/{id}
 * @response `200` `GetAssetData` Successful request
 * @response `404` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  getAsset = ({ id, ...query }: GetAssetParams, params: RequestParams = {}) =>
    this.request<
      GetAssetData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/assets/${id}`,
      method: "GET",
      query: query,
      ...params,
    });
}
