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

import {
  ClearCacheData,
  ExportData,
  ExportPayload,
  HashGenerateData,
  HashGeneratePayload,
  HashVerifyData,
  HashVerifyPayload,
  ImportData,
  ImportPayload,
  RandomData,
  RandomParams,
  SortData,
  SortPayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Utils<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Generate a hash for a given string.
   *
   * @tags Utilities
   * @name HashGenerate
   * @summary Hash a string
   * @request POST:/utils/hash/generate
   * @response `200` `HashGenerateData` Successful request
   */
  hashGenerate = (data: HashGeneratePayload, params: RequestParams = {}) =>
    this.request<HashGenerateData, any>({
      path: `/utils/hash/generate`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Generate a hash for a given string.
   *
   * @tags Utilities
   * @name HashVerify
   * @summary Hash a string
   * @request POST:/utils/hash/verify
   * @response `200` `HashVerifyData` Successful request
   */
  hashVerify = (data: HashVerifyPayload, params: RequestParams = {}) =>
    this.request<HashVerifyData, any>({
      path: `/utils/hash/verify`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Re-sort items in collection based on start and to value of item
   *
   * @tags Utilities
   * @name Sort
   * @summary Sort Items
   * @request POST:/utils/sort/{collection}
   * @response `200` `SortData` Successful request
   */
  sort = (collection: string, data: SortPayload, params: RequestParams = {}) =>
    this.request<SortData, any>({
      path: `/utils/sort/${collection}`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Import multiple records from a JSON or CSV file into a collection.
   *
   * @tags Utilities
   * @name Import
   * @summary Import Items
   * @request POST:/utils/import/{collection}
   * @response `200` `ImportData` Successful request
   */
  import = (collection: string, data: ImportPayload, params: RequestParams = {}) =>
    this.request<ImportData, any>({
      path: `/utils/import/${collection}`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description Export a larger data set to a file in the File Library
   *
   * @tags Utilities
   * @name Export
   * @summary Export Items
   * @request POST:/utils/export/{collection}
   * @response `200` `ExportData` Successful request
   */
  export = (collection: string, data: ExportPayload, params: RequestParams = {}) =>
    this.request<ExportData, any>({
      path: `/utils/export/${collection}`,
      method: "POST",
      body: data,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * @description Resets both the data and schema cache of Directus.
   *
   * @tags Utilities
   * @name ClearCache
   * @summary Clear Cache
   * @request POST:/utils/cache/clear
   * @response `200` `ClearCacheData` Successful request
   */
  clearCache = (params: RequestParams = {}) =>
    this.request<ClearCacheData, any>({
      path: `/utils/cache/clear`,
      method: "POST",
      ...params,
    });
  /**
   * @description Returns a random string of given length.
   *
   * @tags Utilities
   * @name Random
   * @summary Get a Random String
   * @request GET:/utils/random/string
   * @response `200` `RandomData` Successful request
   */
  random = (query: RandomParams, params: RequestParams = {}) =>
    this.request<RandomData, any>({
      path: `/utils/random/string`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
