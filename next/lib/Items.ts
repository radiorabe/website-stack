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
  ReadItemsFooterData,
  ReadItemsFooterParams,
  ReadItemsHomeData,
  ReadItemsHomeParams,
  ReadSingleItemsFooterData,
  ReadSingleItemsFooterParams,
  ReadSingleItemsHomeData,
  ReadSingleItemsHomeParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Items<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * @description List the Footer items.
 *
 * @tags Items, ItemsFooter
 * @name ReadItemsFooter
 * @summary List Items
 * @request GET:/items/Footer
 * @secure
 * @response `200` `ReadItemsFooterData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsFooter = (query: ReadItemsFooterParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsFooterData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/Footer`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single Footer item by unique identifier.
 *
 * @tags Items, ItemsFooter
 * @name ReadSingleItemsFooter
 * @summary Retrieve an Item
 * @request GET:/items/Footer/{id}
 * @response `200` `ReadSingleItemsFooterData` Successful request
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
  readSingleItemsFooter = ({ id, ...query }: ReadSingleItemsFooterParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsFooterData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/Footer/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the Home items.
 *
 * @tags Items, ItemsHome
 * @name ReadItemsHome
 * @summary List Items
 * @request GET:/items/Home
 * @secure
 * @response `200` `ReadItemsHomeData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsHome = (query: ReadItemsHomeParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsHomeData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/Home`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single Home item by unique identifier.
 *
 * @tags Items, ItemsHome
 * @name ReadSingleItemsHome
 * @summary Retrieve an Item
 * @request GET:/items/Home/{id}
 * @response `200` `ReadSingleItemsHomeData` Successful request
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
  readSingleItemsHome = ({ id, ...query }: ReadSingleItemsHomeParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsHomeData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/Home/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
