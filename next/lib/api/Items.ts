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
  ReadItemsHomeData,
  ReadItemsHomeParams,
  ReadItemsImpressumData,
  ReadItemsImpressumParams,
  ReadItemsProgramsData,
  ReadItemsProgramsDirectusUsersData,
  ReadItemsProgramsDirectusUsersParams,
  ReadItemsProgramsParams,
  ReadItemsSendungenData,
  ReadItemsSendungenInfoData,
  ReadItemsSendungenInfoParams,
  ReadItemsSendungenParams,
  ReadItemsTextLinksData,
  ReadItemsTextLinksParams,
  ReadSingleItemsHomeData,
  ReadSingleItemsHomeParams,
  ReadSingleItemsImpressumData,
  ReadSingleItemsImpressumParams,
  ReadSingleItemsProgramsData,
  ReadSingleItemsProgramsDirectusUsersData,
  ReadSingleItemsProgramsDirectusUsersParams,
  ReadSingleItemsProgramsParams,
  ReadSingleItemsSendungenData,
  ReadSingleItemsSendungenInfoData,
  ReadSingleItemsSendungenInfoParams,
  ReadSingleItemsSendungenParams,
  ReadSingleItemsTextLinksData,
  ReadSingleItemsTextLinksParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Items<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
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
 * @description List the programs_directus_users items.
 *
 * @tags Items, ItemsProgramsDirectusUsers
 * @name ReadItemsProgramsDirectusUsers
 * @summary List Items
 * @request GET:/items/programs_directus_users
 * @secure
 * @response `200` `ReadItemsProgramsDirectusUsersData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsProgramsDirectusUsers = (query: ReadItemsProgramsDirectusUsersParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsProgramsDirectusUsersData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/programs_directus_users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single programs_directus_users item by unique identifier.
 *
 * @tags Items, ItemsProgramsDirectusUsers
 * @name ReadSingleItemsProgramsDirectusUsers
 * @summary Retrieve an Item
 * @request GET:/items/programs_directus_users/{id}
 * @response `200` `ReadSingleItemsProgramsDirectusUsersData` Successful request
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
  readSingleItemsProgramsDirectusUsers = (
    { id, ...query }: ReadSingleItemsProgramsDirectusUsersParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsProgramsDirectusUsersData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/programs_directus_users/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the SendungenInfo items.
 *
 * @tags Items, ItemsSendungenInfo
 * @name ReadItemsSendungenInfo
 * @summary List Items
 * @request GET:/items/SendungenInfo
 * @secure
 * @response `200` `ReadItemsSendungenInfoData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsSendungenInfo = (query: ReadItemsSendungenInfoParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsSendungenInfoData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/SendungenInfo`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single SendungenInfo item by unique identifier.
 *
 * @tags Items, ItemsSendungenInfo
 * @name ReadSingleItemsSendungenInfo
 * @summary Retrieve an Item
 * @request GET:/items/SendungenInfo/{id}
 * @response `200` `ReadSingleItemsSendungenInfoData` Successful request
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
  readSingleItemsSendungenInfo = ({ id, ...query }: ReadSingleItemsSendungenInfoParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsSendungenInfoData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/SendungenInfo/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the Sendungen items.
 *
 * @tags Items, ItemsSendungen
 * @name ReadItemsSendungen
 * @summary List Items
 * @request GET:/items/Sendungen
 * @secure
 * @response `200` `ReadItemsSendungenData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsSendungen = (query: ReadItemsSendungenParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsSendungenData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/Sendungen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single Sendungen item by unique identifier.
 *
 * @tags Items, ItemsSendungen
 * @name ReadSingleItemsSendungen
 * @summary Retrieve an Item
 * @request GET:/items/Sendungen/{id}
 * @response `200` `ReadSingleItemsSendungenData` Successful request
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
  readSingleItemsSendungen = ({ id, ...query }: ReadSingleItemsSendungenParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsSendungenData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/Sendungen/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the programs items.
 *
 * @tags Items, ItemsPrograms
 * @name ReadItemsPrograms
 * @summary List Items
 * @request GET:/items/programs
 * @secure
 * @response `200` `ReadItemsProgramsData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPrograms = (query: ReadItemsProgramsParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsProgramsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/programs`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single programs item by unique identifier.
 *
 * @tags Items, ItemsPrograms
 * @name ReadSingleItemsPrograms
 * @summary Retrieve an Item
 * @request GET:/items/programs/{id}
 * @response `200` `ReadSingleItemsProgramsData` Successful request
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
  readSingleItemsPrograms = ({ id, ...query }: ReadSingleItemsProgramsParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsProgramsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/programs/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
