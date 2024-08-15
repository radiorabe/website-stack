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
  ReadItemsPageImpressumData,
  ReadItemsPageImpressumParams,
  ReadItemsPageProgramsData,
  ReadItemsPageProgramsParams,
  ReadItemsPostsData,
  ReadItemsPostsDirectusUsers1Data,
  ReadItemsPostsDirectusUsers1Params,
  ReadItemsPostsParams,
  ReadItemsProgramsData,
  ReadItemsProgramsDirectusUsersData,
  ReadItemsProgramsDirectusUsersParams,
  ReadItemsProgramsParams,
  ReadSingleItemsPageImpressumData,
  ReadSingleItemsPageImpressumParams,
  ReadSingleItemsPageProgramsData,
  ReadSingleItemsPageProgramsParams,
  ReadSingleItemsPostsData,
  ReadSingleItemsPostsDirectusUsers1Data,
  ReadSingleItemsPostsDirectusUsers1Params,
  ReadSingleItemsPostsParams,
  ReadSingleItemsProgramsData,
  ReadSingleItemsProgramsDirectusUsersData,
  ReadSingleItemsProgramsDirectusUsersParams,
  ReadSingleItemsProgramsParams,
} from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Items<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
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
  /**
 * @description List the posts_directus_users_1 items.
 *
 * @tags Items, ItemsPostsDirectusUsers1
 * @name ReadItemsPostsDirectusUsers1
 * @summary List Items
 * @request GET:/items/posts_directus_users_1
 * @secure
 * @response `200` `ReadItemsPostsDirectusUsers1Data` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPostsDirectusUsers1 = (query: ReadItemsPostsDirectusUsers1Params, params: RequestParams = {}) =>
    this.request<
      ReadItemsPostsDirectusUsers1Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/posts_directus_users_1`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single posts_directus_users_1 item by unique identifier.
 *
 * @tags Items, ItemsPostsDirectusUsers1
 * @name ReadSingleItemsPostsDirectusUsers1
 * @summary Retrieve an Item
 * @request GET:/items/posts_directus_users_1/{id}
 * @response `200` `ReadSingleItemsPostsDirectusUsers1Data` Successful request
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
  readSingleItemsPostsDirectusUsers1 = (
    { id, ...query }: ReadSingleItemsPostsDirectusUsers1Params,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPostsDirectusUsers1Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/posts_directus_users_1/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the posts items.
 *
 * @tags Items, ItemsPosts
 * @name ReadItemsPosts
 * @summary List Items
 * @request GET:/items/posts
 * @secure
 * @response `200` `ReadItemsPostsData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPosts = (query: ReadItemsPostsParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPostsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/posts`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single posts item by unique identifier.
 *
 * @tags Items, ItemsPosts
 * @name ReadSingleItemsPosts
 * @summary Retrieve an Item
 * @request GET:/items/posts/{id}
 * @response `200` `ReadSingleItemsPostsData` Successful request
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
  readSingleItemsPosts = ({ id, ...query }: ReadSingleItemsPostsParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPostsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/posts/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_programs items.
 *
 * @tags Items, ItemsPagePrograms
 * @name ReadItemsPagePrograms
 * @summary List Items
 * @request GET:/items/page_programs
 * @secure
 * @response `200` `ReadItemsPageProgramsData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPagePrograms = (query: ReadItemsPageProgramsParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageProgramsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_programs`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_programs item by unique identifier.
 *
 * @tags Items, ItemsPagePrograms
 * @name ReadSingleItemsPagePrograms
 * @summary Retrieve an Item
 * @request GET:/items/page_programs/{id}
 * @response `200` `ReadSingleItemsPageProgramsData` Successful request
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
  readSingleItemsPagePrograms = ({ id, ...query }: ReadSingleItemsPageProgramsParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPageProgramsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_programs/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_impressum items.
 *
 * @tags Items, ItemsPageImpressum
 * @name ReadItemsPageImpressum
 * @summary List Items
 * @request GET:/items/page_impressum
 * @secure
 * @response `200` `ReadItemsPageImpressumData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageImpressum = (query: ReadItemsPageImpressumParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageImpressumData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_impressum`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_impressum item by unique identifier.
 *
 * @tags Items, ItemsPageImpressum
 * @name ReadSingleItemsPageImpressum
 * @summary Retrieve an Item
 * @request GET:/items/page_impressum/{id}
 * @response `200` `ReadSingleItemsPageImpressumData` Successful request
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
  readSingleItemsPageImpressum = ({ id, ...query }: ReadSingleItemsPageImpressumParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPageImpressumData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_impressum/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
