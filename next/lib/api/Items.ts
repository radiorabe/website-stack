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
  ReadItemsFooterTextLinksData,
  ReadItemsFooterTextLinksParams,
  ReadItemsHomeData,
  ReadItemsHomeParams,
  ReadItemsTextLinksData,
  ReadItemsTextLinksParams,
  ReadSingleItemsFooterData,
  ReadSingleItemsFooterParams,
  ReadSingleItemsFooterTextLinksData,
  ReadSingleItemsFooterTextLinksParams,
  ReadSingleItemsHomeData,
  ReadSingleItemsHomeParams,
  ReadSingleItemsTextLinksData,
  ReadSingleItemsTextLinksParams,
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
  /**
 * @description List the textLinks items.
 *
 * @tags Items, ItemsTextLinks
 * @name ReadItemsTextLinks
 * @summary List Items
 * @request GET:/items/textLinks
 * @secure
 * @response `200` `ReadItemsTextLinksData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsTextLinks = (query: ReadItemsTextLinksParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsTextLinksData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/textLinks`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single textLinks item by unique identifier.
 *
 * @tags Items, ItemsTextLinks
 * @name ReadSingleItemsTextLinks
 * @summary Retrieve an Item
 * @request GET:/items/textLinks/{id}
 * @response `200` `ReadSingleItemsTextLinksData` Successful request
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
  readSingleItemsTextLinks = ({ id, ...query }: ReadSingleItemsTextLinksParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsTextLinksData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/textLinks/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the Footer_textLinks items.
 *
 * @tags Items, ItemsFooterTextLinks
 * @name ReadItemsFooterTextLinks
 * @summary List Items
 * @request GET:/items/Footer_textLinks
 * @secure
 * @response `200` `ReadItemsFooterTextLinksData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsFooterTextLinks = (query: ReadItemsFooterTextLinksParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsFooterTextLinksData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/Footer_textLinks`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single Footer_textLinks item by unique identifier.
 *
 * @tags Items, ItemsFooterTextLinks
 * @name ReadSingleItemsFooterTextLinks
 * @summary Retrieve an Item
 * @request GET:/items/Footer_textLinks/{id}
 * @response `200` `ReadSingleItemsFooterTextLinksData` Successful request
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
  readSingleItemsFooterTextLinks = (
    { id, ...query }: ReadSingleItemsFooterTextLinksParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsFooterTextLinksData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/Footer_textLinks/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
