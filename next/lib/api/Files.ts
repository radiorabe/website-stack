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

import { GetFileData, GetFileParams, GetFilesData, GetFilesParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Files<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * @description List the files.
 *
 * @tags Files
 * @name GetFiles
 * @summary List Files
 * @request GET:/files
 * @response `200` `GetFilesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  getFiles = (query: GetFilesParams, params: RequestParams = {}) =>
    this.request<
      GetFilesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/files`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single file by unique identifier.
 *
 * @tags Files
 * @name GetFile
 * @summary Retrieve a Files
 * @request GET:/files/{id}
 * @response `200` `GetFileData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  getFile = ({ id, ...query }: GetFileParams, params: RequestParams = {}) =>
    this.request<
      GetFileData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/files/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
