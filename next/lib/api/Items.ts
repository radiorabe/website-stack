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
  ReadItemsAboutRabeData,
  ReadItemsAboutRabeParams,
  ReadItemsFooterData,
  ReadItemsFooterLinksData,
  ReadItemsFooterLinksParams,
  ReadItemsFooterParams,
  ReadItemsHomeData,
  ReadItemsHomeParams,
  ReadItemsImpressumData,
  ReadItemsImpressumParams,
  ReadItemsTextLinksData,
  ReadItemsTextLinksParams,
  ReadSingleItemsAboutRabeData,
  ReadSingleItemsAboutRabeParams,
  ReadSingleItemsFooterData,
  ReadSingleItemsFooterLinksData,
  ReadSingleItemsFooterLinksParams,
  ReadSingleItemsFooterParams,
  ReadSingleItemsHomeData,
  ReadSingleItemsHomeParams,
  ReadSingleItemsImpressumData,
  ReadSingleItemsImpressumParams,
  ReadSingleItemsTextLinksData,
  ReadSingleItemsTextLinksParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Items<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * @description List the AboutRabe items.
 *
 * @tags Items, ItemsAboutRabe
 * @name ReadItemsAboutRabe
 * @summary List Items
 * @request GET:/items/AboutRabe
 * @secure
 * @response `200` `ReadItemsAboutRabeData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsAboutRabe = (query: ReadItemsAboutRabeParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsAboutRabeData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/AboutRabe`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single AboutRabe item by unique identifier.
 *
 * @tags Items, ItemsAboutRabe
 * @name ReadSingleItemsAboutRabe
 * @summary Retrieve an Item
 * @request GET:/items/AboutRabe/{id}
 * @response `200` `ReadSingleItemsAboutRabeData` Successful request
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
  readSingleItemsAboutRabe = ({ id, ...query }: ReadSingleItemsAboutRabeParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsAboutRabeData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/AboutRabe/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
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
 * @description List the Footer_Links items.
 *
 * @tags Items, ItemsFooterLinks
 * @name ReadItemsFooterLinks
 * @summary List Items
 * @request GET:/items/Footer_Links
 * @secure
 * @response `200` `ReadItemsFooterLinksData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsFooterLinks = (query: ReadItemsFooterLinksParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsFooterLinksData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/Footer_Links`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single Footer_Links item by unique identifier.
 *
 * @tags Items, ItemsFooterLinks
 * @name ReadSingleItemsFooterLinks
 * @summary Retrieve an Item
 * @request GET:/items/Footer_Links/{id}
 * @response `200` `ReadSingleItemsFooterLinksData` Successful request
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
  readSingleItemsFooterLinks = ({ id, ...query }: ReadSingleItemsFooterLinksParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsFooterLinksData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/Footer_Links/${id}`,
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
 * @description List the Impressum items.
 *
 * @tags Items, ItemsImpressum
 * @name ReadItemsImpressum
 * @summary List Items
 * @request GET:/items/Impressum
 * @secure
 * @response `200` `ReadItemsImpressumData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsImpressum = (query: ReadItemsImpressumParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsImpressumData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/Impressum`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single Impressum item by unique identifier.
 *
 * @tags Items, ItemsImpressum
 * @name ReadSingleItemsImpressum
 * @summary Retrieve an Item
 * @request GET:/items/Impressum/{id}
 * @response `200` `ReadSingleItemsImpressumData` Successful request
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
  readSingleItemsImpressum = ({ id, ...query }: ReadSingleItemsImpressumParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsImpressumData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/Impressum/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the TextLinks items.
 *
 * @tags Items, ItemsTextLinks
 * @name ReadItemsTextLinks
 * @summary List Items
 * @request GET:/items/TextLinks
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
      path: `/items/TextLinks`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single TextLinks item by unique identifier.
 *
 * @tags Items, ItemsTextLinks
 * @name ReadSingleItemsTextLinks
 * @summary Retrieve an Item
 * @request GET:/items/TextLinks/{id}
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
      path: `/items/TextLinks/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
