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
  ReadItemsInfoBoxData,
  ReadItemsInfoBoxParams,
  ReadItemsPageAgbData,
  ReadItemsPageAgbParams,
  ReadItemsPageContactData,
  ReadItemsPageContactParams,
  ReadItemsPageImpressumData,
  ReadItemsPageImpressumParams,
  ReadItemsPageProgramData,
  ReadItemsPageProgramParams,
  ReadItemsPageProgramPrograms1Data,
  ReadItemsPageProgramPrograms1Params,
  ReadItemsPageProgramPrograms2Data,
  ReadItemsPageProgramPrograms2Params,
  ReadItemsPageProgramPrograms3Data,
  ReadItemsPageProgramPrograms3Params,
  ReadItemsPageProgramProgramsData,
  ReadItemsPageProgramProgramsParams,
  ReadItemsPageProgramsData,
  ReadItemsPageProgramsParams,
  ReadItemsPageTeamData,
  ReadItemsPageTeamDirectusUsers1Data,
  ReadItemsPageTeamDirectusUsers1Params,
  ReadItemsPageTeamDirectusUsers2Data,
  ReadItemsPageTeamDirectusUsers2Params,
  ReadItemsPageTeamDirectusUsersData,
  ReadItemsPageTeamDirectusUsersParams,
  ReadItemsPageTeamParams,
  ReadItemsPartyTipsData,
  ReadItemsPartyTipsParams,
  ReadItemsPostsData,
  ReadItemsPostsDirectusUsers1Data,
  ReadItemsPostsDirectusUsers1Params,
  ReadItemsPostsEditorNodesData,
  ReadItemsPostsEditorNodesParams,
  ReadItemsPostsParams,
  ReadItemsProgramsData,
  ReadItemsProgramsDirectusUsersData,
  ReadItemsProgramsDirectusUsersParams,
  ReadItemsProgramsParams,
  ReadItemsQuoteData,
  ReadItemsQuoteParams,
  ReadSingleItemsInfoBoxData,
  ReadSingleItemsInfoBoxParams,
  ReadSingleItemsPageAgbData,
  ReadSingleItemsPageAgbParams,
  ReadSingleItemsPageContactData,
  ReadSingleItemsPageContactParams,
  ReadSingleItemsPageImpressumData,
  ReadSingleItemsPageImpressumParams,
  ReadSingleItemsPageProgramData,
  ReadSingleItemsPageProgramParams,
  ReadSingleItemsPageProgramPrograms1Data,
  ReadSingleItemsPageProgramPrograms1Params,
  ReadSingleItemsPageProgramPrograms2Data,
  ReadSingleItemsPageProgramPrograms2Params,
  ReadSingleItemsPageProgramPrograms3Data,
  ReadSingleItemsPageProgramPrograms3Params,
  ReadSingleItemsPageProgramProgramsData,
  ReadSingleItemsPageProgramProgramsParams,
  ReadSingleItemsPageProgramsData,
  ReadSingleItemsPageProgramsParams,
  ReadSingleItemsPageTeamData,
  ReadSingleItemsPageTeamDirectusUsers1Data,
  ReadSingleItemsPageTeamDirectusUsers1Params,
  ReadSingleItemsPageTeamDirectusUsers2Data,
  ReadSingleItemsPageTeamDirectusUsers2Params,
  ReadSingleItemsPageTeamDirectusUsersData,
  ReadSingleItemsPageTeamDirectusUsersParams,
  ReadSingleItemsPageTeamParams,
  ReadSingleItemsPartyTipsData,
  ReadSingleItemsPartyTipsParams,
  ReadSingleItemsPostsData,
  ReadSingleItemsPostsDirectusUsers1Data,
  ReadSingleItemsPostsDirectusUsers1Params,
  ReadSingleItemsPostsEditorNodesData,
  ReadSingleItemsPostsEditorNodesParams,
  ReadSingleItemsPostsParams,
  ReadSingleItemsProgramsData,
  ReadSingleItemsProgramsDirectusUsersData,
  ReadSingleItemsProgramsDirectusUsersParams,
  ReadSingleItemsProgramsParams,
  ReadSingleItemsQuoteData,
  ReadSingleItemsQuoteParams,
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
 * @description List the posts_editor_nodes items.
 *
 * @tags Items, ItemsPostsEditorNodes
 * @name ReadItemsPostsEditorNodes
 * @summary List Items
 * @request GET:/items/posts_editor_nodes
 * @secure
 * @response `200` `ReadItemsPostsEditorNodesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPostsEditorNodes = (query: ReadItemsPostsEditorNodesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPostsEditorNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/posts_editor_nodes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single posts_editor_nodes item by unique identifier.
 *
 * @tags Items, ItemsPostsEditorNodes
 * @name ReadSingleItemsPostsEditorNodes
 * @summary Retrieve an Item
 * @request GET:/items/posts_editor_nodes/{id}
 * @response `200` `ReadSingleItemsPostsEditorNodesData` Successful request
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
  readSingleItemsPostsEditorNodes = (
    { id, ...query }: ReadSingleItemsPostsEditorNodesParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPostsEditorNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/posts_editor_nodes/${id}`,
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
 * @description List the page_agb items.
 *
 * @tags Items, ItemsPageAgb
 * @name ReadItemsPageAgb
 * @summary List Items
 * @request GET:/items/page_agb
 * @secure
 * @response `200` `ReadItemsPageAgbData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageAgb = (query: ReadItemsPageAgbParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageAgbData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_agb`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_agb item by unique identifier.
 *
 * @tags Items, ItemsPageAgb
 * @name ReadSingleItemsPageAgb
 * @summary Retrieve an Item
 * @request GET:/items/page_agb/{id}
 * @response `200` `ReadSingleItemsPageAgbData` Successful request
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
  readSingleItemsPageAgb = ({ id, ...query }: ReadSingleItemsPageAgbParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPageAgbData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_agb/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the quote items.
 *
 * @tags Items, ItemsQuote
 * @name ReadItemsQuote
 * @summary List Items
 * @request GET:/items/quote
 * @secure
 * @response `200` `ReadItemsQuoteData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsQuote = (query: ReadItemsQuoteParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsQuoteData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/quote`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single quote item by unique identifier.
 *
 * @tags Items, ItemsQuote
 * @name ReadSingleItemsQuote
 * @summary Retrieve an Item
 * @request GET:/items/quote/{id}
 * @response `200` `ReadSingleItemsQuoteData` Successful request
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
  readSingleItemsQuote = ({ id, ...query }: ReadSingleItemsQuoteParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsQuoteData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/quote/${id}`,
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
 * @description List the info_box items.
 *
 * @tags Items, ItemsInfoBox
 * @name ReadItemsInfoBox
 * @summary List Items
 * @request GET:/items/info_box
 * @secure
 * @response `200` `ReadItemsInfoBoxData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsInfoBox = (query: ReadItemsInfoBoxParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsInfoBoxData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/info_box`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single info_box item by unique identifier.
 *
 * @tags Items, ItemsInfoBox
 * @name ReadSingleItemsInfoBox
 * @summary Retrieve an Item
 * @request GET:/items/info_box/{id}
 * @response `200` `ReadSingleItemsInfoBoxData` Successful request
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
  readSingleItemsInfoBox = ({ id, ...query }: ReadSingleItemsInfoBoxParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsInfoBoxData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/info_box/${id}`,
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
  /**
 * @description List the page_contact items.
 *
 * @tags Items, ItemsPageContact
 * @name ReadItemsPageContact
 * @summary List Items
 * @request GET:/items/page_contact
 * @secure
 * @response `200` `ReadItemsPageContactData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageContact = (query: ReadItemsPageContactParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageContactData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_contact`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_contact item by unique identifier.
 *
 * @tags Items, ItemsPageContact
 * @name ReadSingleItemsPageContact
 * @summary Retrieve an Item
 * @request GET:/items/page_contact/{id}
 * @response `200` `ReadSingleItemsPageContactData` Successful request
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
  readSingleItemsPageContact = ({ id, ...query }: ReadSingleItemsPageContactParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPageContactData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_contact/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_team items.
 *
 * @tags Items, ItemsPageTeam
 * @name ReadItemsPageTeam
 * @summary List Items
 * @request GET:/items/page_team
 * @secure
 * @response `200` `ReadItemsPageTeamData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageTeam = (query: ReadItemsPageTeamParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageTeamData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_team`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_team item by unique identifier.
 *
 * @tags Items, ItemsPageTeam
 * @name ReadSingleItemsPageTeam
 * @summary Retrieve an Item
 * @request GET:/items/page_team/{id}
 * @response `200` `ReadSingleItemsPageTeamData` Successful request
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
  readSingleItemsPageTeam = ({ id, ...query }: ReadSingleItemsPageTeamParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPageTeamData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_team/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_program_programs_3 items.
 *
 * @tags Items, ItemsPageProgramPrograms3
 * @name ReadItemsPageProgramPrograms3
 * @summary List Items
 * @request GET:/items/page_program_programs_3
 * @secure
 * @response `200` `ReadItemsPageProgramPrograms3Data` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageProgramPrograms3 = (query: ReadItemsPageProgramPrograms3Params, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageProgramPrograms3Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_program_programs_3`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_program_programs_3 item by unique identifier.
 *
 * @tags Items, ItemsPageProgramPrograms3
 * @name ReadSingleItemsPageProgramPrograms3
 * @summary Retrieve an Item
 * @request GET:/items/page_program_programs_3/{id}
 * @response `200` `ReadSingleItemsPageProgramPrograms3Data` Successful request
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
  readSingleItemsPageProgramPrograms3 = (
    { id, ...query }: ReadSingleItemsPageProgramPrograms3Params,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageProgramPrograms3Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_program_programs_3/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_team_directus_users items.
 *
 * @tags Items, ItemsPageTeamDirectusUsers
 * @name ReadItemsPageTeamDirectusUsers
 * @summary List Items
 * @request GET:/items/page_team_directus_users
 * @secure
 * @response `200` `ReadItemsPageTeamDirectusUsersData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageTeamDirectusUsers = (query: ReadItemsPageTeamDirectusUsersParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageTeamDirectusUsersData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_team_directus_users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_team_directus_users item by unique identifier.
 *
 * @tags Items, ItemsPageTeamDirectusUsers
 * @name ReadSingleItemsPageTeamDirectusUsers
 * @summary Retrieve an Item
 * @request GET:/items/page_team_directus_users/{id}
 * @response `200` `ReadSingleItemsPageTeamDirectusUsersData` Successful request
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
  readSingleItemsPageTeamDirectusUsers = (
    { id, ...query }: ReadSingleItemsPageTeamDirectusUsersParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageTeamDirectusUsersData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_team_directus_users/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_program_programs items.
 *
 * @tags Items, ItemsPageProgramPrograms
 * @name ReadItemsPageProgramPrograms
 * @summary List Items
 * @request GET:/items/page_program_programs
 * @secure
 * @response `200` `ReadItemsPageProgramProgramsData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageProgramPrograms = (query: ReadItemsPageProgramProgramsParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageProgramProgramsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_program_programs`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_program_programs item by unique identifier.
 *
 * @tags Items, ItemsPageProgramPrograms
 * @name ReadSingleItemsPageProgramPrograms
 * @summary Retrieve an Item
 * @request GET:/items/page_program_programs/{id}
 * @response `200` `ReadSingleItemsPageProgramProgramsData` Successful request
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
  readSingleItemsPageProgramPrograms = (
    { id, ...query }: ReadSingleItemsPageProgramProgramsParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageProgramProgramsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_program_programs/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_team_directus_users_1 items.
 *
 * @tags Items, ItemsPageTeamDirectusUsers1
 * @name ReadItemsPageTeamDirectusUsers1
 * @summary List Items
 * @request GET:/items/page_team_directus_users_1
 * @secure
 * @response `200` `ReadItemsPageTeamDirectusUsers1Data` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageTeamDirectusUsers1 = (query: ReadItemsPageTeamDirectusUsers1Params, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageTeamDirectusUsers1Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_team_directus_users_1`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_team_directus_users_1 item by unique identifier.
 *
 * @tags Items, ItemsPageTeamDirectusUsers1
 * @name ReadSingleItemsPageTeamDirectusUsers1
 * @summary Retrieve an Item
 * @request GET:/items/page_team_directus_users_1/{id}
 * @response `200` `ReadSingleItemsPageTeamDirectusUsers1Data` Successful request
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
  readSingleItemsPageTeamDirectusUsers1 = (
    { id, ...query }: ReadSingleItemsPageTeamDirectusUsers1Params,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageTeamDirectusUsers1Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_team_directus_users_1/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_team_directus_users_2 items.
 *
 * @tags Items, ItemsPageTeamDirectusUsers2
 * @name ReadItemsPageTeamDirectusUsers2
 * @summary List Items
 * @request GET:/items/page_team_directus_users_2
 * @secure
 * @response `200` `ReadItemsPageTeamDirectusUsers2Data` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageTeamDirectusUsers2 = (query: ReadItemsPageTeamDirectusUsers2Params, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageTeamDirectusUsers2Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_team_directus_users_2`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_team_directus_users_2 item by unique identifier.
 *
 * @tags Items, ItemsPageTeamDirectusUsers2
 * @name ReadSingleItemsPageTeamDirectusUsers2
 * @summary Retrieve an Item
 * @request GET:/items/page_team_directus_users_2/{id}
 * @response `200` `ReadSingleItemsPageTeamDirectusUsers2Data` Successful request
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
  readSingleItemsPageTeamDirectusUsers2 = (
    { id, ...query }: ReadSingleItemsPageTeamDirectusUsers2Params,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageTeamDirectusUsers2Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_team_directus_users_2/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_program_programs_1 items.
 *
 * @tags Items, ItemsPageProgramPrograms1
 * @name ReadItemsPageProgramPrograms1
 * @summary List Items
 * @request GET:/items/page_program_programs_1
 * @secure
 * @response `200` `ReadItemsPageProgramPrograms1Data` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageProgramPrograms1 = (query: ReadItemsPageProgramPrograms1Params, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageProgramPrograms1Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_program_programs_1`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_program_programs_1 item by unique identifier.
 *
 * @tags Items, ItemsPageProgramPrograms1
 * @name ReadSingleItemsPageProgramPrograms1
 * @summary Retrieve an Item
 * @request GET:/items/page_program_programs_1/{id}
 * @response `200` `ReadSingleItemsPageProgramPrograms1Data` Successful request
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
  readSingleItemsPageProgramPrograms1 = (
    { id, ...query }: ReadSingleItemsPageProgramPrograms1Params,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageProgramPrograms1Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_program_programs_1/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the party_tips items.
 *
 * @tags Items, ItemsPartyTips
 * @name ReadItemsPartyTips
 * @summary List Items
 * @request GET:/items/party_tips
 * @secure
 * @response `200` `ReadItemsPartyTipsData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPartyTips = (query: ReadItemsPartyTipsParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPartyTipsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/party_tips`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single party_tips item by unique identifier.
 *
 * @tags Items, ItemsPartyTips
 * @name ReadSingleItemsPartyTips
 * @summary Retrieve an Item
 * @request GET:/items/party_tips/{id}
 * @response `200` `ReadSingleItemsPartyTipsData` Successful request
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
  readSingleItemsPartyTips = ({ id, ...query }: ReadSingleItemsPartyTipsParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPartyTipsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/party_tips/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_program_programs_2 items.
 *
 * @tags Items, ItemsPageProgramPrograms2
 * @name ReadItemsPageProgramPrograms2
 * @summary List Items
 * @request GET:/items/page_program_programs_2
 * @secure
 * @response `200` `ReadItemsPageProgramPrograms2Data` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageProgramPrograms2 = (query: ReadItemsPageProgramPrograms2Params, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageProgramPrograms2Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_program_programs_2`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_program_programs_2 item by unique identifier.
 *
 * @tags Items, ItemsPageProgramPrograms2
 * @name ReadSingleItemsPageProgramPrograms2
 * @summary Retrieve an Item
 * @request GET:/items/page_program_programs_2/{id}
 * @response `200` `ReadSingleItemsPageProgramPrograms2Data` Successful request
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
  readSingleItemsPageProgramPrograms2 = (
    { id, ...query }: ReadSingleItemsPageProgramPrograms2Params,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageProgramPrograms2Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_program_programs_2/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_program items.
 *
 * @tags Items, ItemsPageProgram
 * @name ReadItemsPageProgram
 * @summary List Items
 * @request GET:/items/page_program
 * @secure
 * @response `200` `ReadItemsPageProgramData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageProgram = (query: ReadItemsPageProgramParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageProgramData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_program`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_program item by unique identifier.
 *
 * @tags Items, ItemsPageProgram
 * @name ReadSingleItemsPageProgram
 * @summary Retrieve an Item
 * @request GET:/items/page_program/{id}
 * @response `200` `ReadSingleItemsPageProgramData` Successful request
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
  readSingleItemsPageProgram = ({ id, ...query }: ReadSingleItemsPageProgramParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPageProgramData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_program/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
