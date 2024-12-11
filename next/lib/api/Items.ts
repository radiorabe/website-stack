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
  CreateItemsOrdersData,
  CreateItemsOrdersParams,
  CreateItemsOrdersPayload,
  ItemsOrders,
  ReadItemsAudioPlayerData,
  ReadItemsAudioPlayerFilesData,
  ReadItemsAudioPlayerFilesParams,
  ReadItemsAudioPlayerParams,
  ReadItemsClassesData,
  ReadItemsClassesParams,
  ReadItemsContactAddressData,
  ReadItemsContactAddressParams,
  ReadItemsEventsData,
  ReadItemsEventsEditorNodesData,
  ReadItemsEventsEditorNodesParams,
  ReadItemsEventsEventShowsData,
  ReadItemsEventsEventShowsParams,
  ReadItemsEventsFilesData,
  ReadItemsEventsFilesParams,
  ReadItemsEventShowsData,
  ReadItemsEventShowsParams,
  ReadItemsEventsParams,
  ReadItemsIframeData,
  ReadItemsIframeParams,
  ReadItemsImageBoxData,
  ReadItemsImageBoxParams,
  ReadItemsInfoBoxData,
  ReadItemsInfoBoxParams,
  ReadItemsInternshipsData,
  ReadItemsInternshipsParams,
  ReadItemsMemberProductData,
  ReadItemsMemberProductParams,
  ReadItemsOrdersData,
  ReadItemsOrdersParams,
  ReadItemsPageAgbData,
  ReadItemsPageAgbParams,
  ReadItemsPageClassesClassesData,
  ReadItemsPageClassesClassesParams,
  ReadItemsPageClassesData,
  ReadItemsPageClassesNodesData,
  ReadItemsPageClassesNodesParams,
  ReadItemsPageClassesParams,
  ReadItemsPageContactContactAddressData,
  ReadItemsPageContactContactAddressParams,
  ReadItemsPageContactData,
  ReadItemsPageContactFilesData,
  ReadItemsPageContactFilesParams,
  ReadItemsPageContactParams,
  ReadItemsPageHistoryData,
  ReadItemsPageHistoryFiles1Data,
  ReadItemsPageHistoryFiles1Params,
  ReadItemsPageHistoryFilesData,
  ReadItemsPageHistoryFilesParams,
  ReadItemsPageHistoryNodesData,
  ReadItemsPageHistoryNodesParams,
  ReadItemsPageHistoryParams,
  ReadItemsPageImpressumData,
  ReadItemsPageImpressumParams,
  ReadItemsPageInternshipData,
  ReadItemsPageInternshipInternshipsData,
  ReadItemsPageInternshipInternshipsParams,
  ReadItemsPageInternshipNodesData,
  ReadItemsPageInternshipNodesParams,
  ReadItemsPageInternshipParams,
  ReadItemsPageJoinData,
  ReadItemsPageJoinNodesData,
  ReadItemsPageJoinNodesParams,
  ReadItemsPageJoinParams,
  ReadItemsPageMemberData,
  ReadItemsPageMemberParams,
  ReadItemsPageMemberStatementsData,
  ReadItemsPageMemberStatementsParams,
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
  ReadItemsPageReceiveData,
  ReadItemsPageReceiveNodesData,
  ReadItemsPageReceiveNodesParams,
  ReadItemsPageReceiveParams,
  ReadItemsPageTeamData,
  ReadItemsPageTeamDirectusUsers1Data,
  ReadItemsPageTeamDirectusUsers1Params,
  ReadItemsPageTeamDirectusUsers2Data,
  ReadItemsPageTeamDirectusUsers2Params,
  ReadItemsPageTeamDirectusUsersData,
  ReadItemsPageTeamDirectusUsersParams,
  ReadItemsPageTeamParams,
  ReadItemsPartyLocationData,
  ReadItemsPartyLocationParams,
  ReadItemsPartyTipsData,
  ReadItemsPartyTipsParams,
  ReadItemsPostData,
  ReadItemsPostDirectusUsersData,
  ReadItemsPostDirectusUsersParams,
  ReadItemsPostEditorNodesData,
  ReadItemsPostEditorNodesParams,
  ReadItemsPostFilesData,
  ReadItemsPostFilesParams,
  ReadItemsPostParams,
  ReadItemsPostTags1Data,
  ReadItemsPostTags1Params,
  ReadItemsProgramsData,
  ReadItemsProgramsDirectusUsersData,
  ReadItemsProgramsDirectusUsersParams,
  ReadItemsProgramsParams,
  ReadItemsQuoteData,
  ReadItemsQuoteParams,
  ReadItemsStatementsData,
  ReadItemsStatementsParams,
  ReadItemsTagsData,
  ReadItemsTagsParams,
  ReadSingleItemsAudioPlayerData,
  ReadSingleItemsAudioPlayerFilesData,
  ReadSingleItemsAudioPlayerFilesParams,
  ReadSingleItemsAudioPlayerParams,
  ReadSingleItemsClassesData,
  ReadSingleItemsClassesParams,
  ReadSingleItemsContactAddressData,
  ReadSingleItemsContactAddressParams,
  ReadSingleItemsEventsData,
  ReadSingleItemsEventsEditorNodesData,
  ReadSingleItemsEventsEditorNodesParams,
  ReadSingleItemsEventsEventShowsData,
  ReadSingleItemsEventsEventShowsParams,
  ReadSingleItemsEventsFilesData,
  ReadSingleItemsEventsFilesParams,
  ReadSingleItemsEventShowsData,
  ReadSingleItemsEventShowsParams,
  ReadSingleItemsEventsParams,
  ReadSingleItemsIframeData,
  ReadSingleItemsIframeParams,
  ReadSingleItemsImageBoxData,
  ReadSingleItemsImageBoxParams,
  ReadSingleItemsInfoBoxData,
  ReadSingleItemsInfoBoxParams,
  ReadSingleItemsInternshipsData,
  ReadSingleItemsInternshipsParams,
  ReadSingleItemsMemberProductData,
  ReadSingleItemsMemberProductParams,
  ReadSingleItemsOrdersData,
  ReadSingleItemsOrdersParams,
  ReadSingleItemsPageAgbData,
  ReadSingleItemsPageAgbParams,
  ReadSingleItemsPageClassesClassesData,
  ReadSingleItemsPageClassesClassesParams,
  ReadSingleItemsPageClassesData,
  ReadSingleItemsPageClassesNodesData,
  ReadSingleItemsPageClassesNodesParams,
  ReadSingleItemsPageClassesParams,
  ReadSingleItemsPageContactContactAddressData,
  ReadSingleItemsPageContactContactAddressParams,
  ReadSingleItemsPageContactData,
  ReadSingleItemsPageContactFilesData,
  ReadSingleItemsPageContactFilesParams,
  ReadSingleItemsPageContactParams,
  ReadSingleItemsPageHistoryData,
  ReadSingleItemsPageHistoryFiles1Data,
  ReadSingleItemsPageHistoryFiles1Params,
  ReadSingleItemsPageHistoryFilesData,
  ReadSingleItemsPageHistoryFilesParams,
  ReadSingleItemsPageHistoryNodesData,
  ReadSingleItemsPageHistoryNodesParams,
  ReadSingleItemsPageHistoryParams,
  ReadSingleItemsPageImpressumData,
  ReadSingleItemsPageImpressumParams,
  ReadSingleItemsPageInternshipData,
  ReadSingleItemsPageInternshipInternshipsData,
  ReadSingleItemsPageInternshipInternshipsParams,
  ReadSingleItemsPageInternshipNodesData,
  ReadSingleItemsPageInternshipNodesParams,
  ReadSingleItemsPageInternshipParams,
  ReadSingleItemsPageJoinData,
  ReadSingleItemsPageJoinNodesData,
  ReadSingleItemsPageJoinNodesParams,
  ReadSingleItemsPageJoinParams,
  ReadSingleItemsPageMemberData,
  ReadSingleItemsPageMemberParams,
  ReadSingleItemsPageMemberStatementsData,
  ReadSingleItemsPageMemberStatementsParams,
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
  ReadSingleItemsPageReceiveData,
  ReadSingleItemsPageReceiveNodesData,
  ReadSingleItemsPageReceiveNodesParams,
  ReadSingleItemsPageReceiveParams,
  ReadSingleItemsPageTeamData,
  ReadSingleItemsPageTeamDirectusUsers1Data,
  ReadSingleItemsPageTeamDirectusUsers1Params,
  ReadSingleItemsPageTeamDirectusUsers2Data,
  ReadSingleItemsPageTeamDirectusUsers2Params,
  ReadSingleItemsPageTeamDirectusUsersData,
  ReadSingleItemsPageTeamDirectusUsersParams,
  ReadSingleItemsPageTeamParams,
  ReadSingleItemsPartyLocationData,
  ReadSingleItemsPartyLocationParams,
  ReadSingleItemsPartyTipsData,
  ReadSingleItemsPartyTipsParams,
  ReadSingleItemsPostData,
  ReadSingleItemsPostDirectusUsersData,
  ReadSingleItemsPostDirectusUsersParams,
  ReadSingleItemsPostEditorNodesData,
  ReadSingleItemsPostEditorNodesParams,
  ReadSingleItemsPostFilesData,
  ReadSingleItemsPostFilesParams,
  ReadSingleItemsPostParams,
  ReadSingleItemsPostTags1Data,
  ReadSingleItemsPostTags1Params,
  ReadSingleItemsProgramsData,
  ReadSingleItemsProgramsDirectusUsersData,
  ReadSingleItemsProgramsDirectusUsersParams,
  ReadSingleItemsProgramsParams,
  ReadSingleItemsQuoteData,
  ReadSingleItemsQuoteParams,
  ReadSingleItemsStatementsData,
  ReadSingleItemsStatementsParams,
  ReadSingleItemsTagsData,
  ReadSingleItemsTagsParams,
  UpdateItemsOrdersData,
  UpdateItemsOrdersParams,
  UpdateItemsOrdersPayload,
  UpdateSingleItemsOrdersData,
  UpdateSingleItemsOrdersParams,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Items<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * @description List the page_contact_contact_address items.
 *
 * @tags Items, ItemsPageContactContactAddress
 * @name ReadItemsPageContactContactAddress
 * @summary List Items
 * @request GET:/items/page_contact_contact_address
 * @secure
 * @response `200` `ReadItemsPageContactContactAddressData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageContactContactAddress = (query: ReadItemsPageContactContactAddressParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageContactContactAddressData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_contact_contact_address`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_contact_contact_address item by unique identifier.
 *
 * @tags Items, ItemsPageContactContactAddress
 * @name ReadSingleItemsPageContactContactAddress
 * @summary Retrieve an Item
 * @request GET:/items/page_contact_contact_address/{id}
 * @response `200` `ReadSingleItemsPageContactContactAddressData` Successful request
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
  readSingleItemsPageContactContactAddress = (
    { id, ...query }: ReadSingleItemsPageContactContactAddressParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageContactContactAddressData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_contact_contact_address/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the image_box items.
 *
 * @tags Items, ItemsImageBox
 * @name ReadItemsImageBox
 * @summary List Items
 * @request GET:/items/image_box
 * @secure
 * @response `200` `ReadItemsImageBoxData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsImageBox = (query: ReadItemsImageBoxParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsImageBoxData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/image_box`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single image_box item by unique identifier.
 *
 * @tags Items, ItemsImageBox
 * @name ReadSingleItemsImageBox
 * @summary Retrieve an Item
 * @request GET:/items/image_box/{id}
 * @response `200` `ReadSingleItemsImageBoxData` Successful request
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
  readSingleItemsImageBox = ({ id, ...query }: ReadSingleItemsImageBoxParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsImageBoxData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/image_box/${id}`,
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
 * @description List the page_contact_files items.
 *
 * @tags Items, ItemsPageContactFiles
 * @name ReadItemsPageContactFiles
 * @summary List Items
 * @request GET:/items/page_contact_files
 * @secure
 * @response `200` `ReadItemsPageContactFilesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageContactFiles = (query: ReadItemsPageContactFilesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageContactFilesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_contact_files`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_contact_files item by unique identifier.
 *
 * @tags Items, ItemsPageContactFiles
 * @name ReadSingleItemsPageContactFiles
 * @summary Retrieve an Item
 * @request GET:/items/page_contact_files/{id}
 * @response `200` `ReadSingleItemsPageContactFilesData` Successful request
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
  readSingleItemsPageContactFiles = (
    { id, ...query }: ReadSingleItemsPageContactFilesParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageContactFilesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_contact_files/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the party_location items.
 *
 * @tags Items, ItemsPartyLocation
 * @name ReadItemsPartyLocation
 * @summary List Items
 * @request GET:/items/party_location
 * @secure
 * @response `200` `ReadItemsPartyLocationData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPartyLocation = (query: ReadItemsPartyLocationParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPartyLocationData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/party_location`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single party_location item by unique identifier.
 *
 * @tags Items, ItemsPartyLocation
 * @name ReadSingleItemsPartyLocation
 * @summary Retrieve an Item
 * @request GET:/items/party_location/{id}
 * @response `200` `ReadSingleItemsPartyLocationData` Successful request
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
  readSingleItemsPartyLocation = ({ id, ...query }: ReadSingleItemsPartyLocationParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPartyLocationData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/party_location/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_member_statements items.
 *
 * @tags Items, ItemsPageMemberStatements
 * @name ReadItemsPageMemberStatements
 * @summary List Items
 * @request GET:/items/page_member_statements
 * @secure
 * @response `200` `ReadItemsPageMemberStatementsData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageMemberStatements = (query: ReadItemsPageMemberStatementsParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageMemberStatementsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_member_statements`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_member_statements item by unique identifier.
 *
 * @tags Items, ItemsPageMemberStatements
 * @name ReadSingleItemsPageMemberStatements
 * @summary Retrieve an Item
 * @request GET:/items/page_member_statements/{id}
 * @response `200` `ReadSingleItemsPageMemberStatementsData` Successful request
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
  readSingleItemsPageMemberStatements = (
    { id, ...query }: ReadSingleItemsPageMemberStatementsParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageMemberStatementsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_member_statements/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the member_product items.
 *
 * @tags Items, ItemsMemberProduct
 * @name ReadItemsMemberProduct
 * @summary List Items
 * @request GET:/items/member_product
 * @secure
 * @response `200` `ReadItemsMemberProductData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsMemberProduct = (query: ReadItemsMemberProductParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsMemberProductData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/member_product`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single member_product item by unique identifier.
 *
 * @tags Items, ItemsMemberProduct
 * @name ReadSingleItemsMemberProduct
 * @summary Retrieve an Item
 * @request GET:/items/member_product/{id}
 * @response `200` `ReadSingleItemsMemberProductData` Successful request
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
  readSingleItemsMemberProduct = ({ id, ...query }: ReadSingleItemsMemberProductParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsMemberProductData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/member_product/${id}`,
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
 * @description List the page_history_files items.
 *
 * @tags Items, ItemsPageHistoryFiles
 * @name ReadItemsPageHistoryFiles
 * @summary List Items
 * @request GET:/items/page_history_files
 * @secure
 * @response `200` `ReadItemsPageHistoryFilesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageHistoryFiles = (query: ReadItemsPageHistoryFilesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageHistoryFilesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_history_files`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_history_files item by unique identifier.
 *
 * @tags Items, ItemsPageHistoryFiles
 * @name ReadSingleItemsPageHistoryFiles
 * @summary Retrieve an Item
 * @request GET:/items/page_history_files/{id}
 * @response `200` `ReadSingleItemsPageHistoryFilesData` Successful request
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
  readSingleItemsPageHistoryFiles = (
    { id, ...query }: ReadSingleItemsPageHistoryFilesParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageHistoryFilesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_history_files/${id}`,
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
  /**
 * @description List the page_receive items.
 *
 * @tags Items, ItemsPageReceive
 * @name ReadItemsPageReceive
 * @summary List Items
 * @request GET:/items/page_receive
 * @secure
 * @response `200` `ReadItemsPageReceiveData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageReceive = (query: ReadItemsPageReceiveParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageReceiveData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_receive`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_receive item by unique identifier.
 *
 * @tags Items, ItemsPageReceive
 * @name ReadSingleItemsPageReceive
 * @summary Retrieve an Item
 * @request GET:/items/page_receive/{id}
 * @response `200` `ReadSingleItemsPageReceiveData` Successful request
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
  readSingleItemsPageReceive = ({ id, ...query }: ReadSingleItemsPageReceiveParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPageReceiveData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_receive/${id}`,
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
 * @description List the page_history items.
 *
 * @tags Items, ItemsPageHistory
 * @name ReadItemsPageHistory
 * @summary List Items
 * @request GET:/items/page_history
 * @secure
 * @response `200` `ReadItemsPageHistoryData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageHistory = (query: ReadItemsPageHistoryParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageHistoryData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_history`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_history item by unique identifier.
 *
 * @tags Items, ItemsPageHistory
 * @name ReadSingleItemsPageHistory
 * @summary Retrieve an Item
 * @request GET:/items/page_history/{id}
 * @response `200` `ReadSingleItemsPageHistoryData` Successful request
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
  readSingleItemsPageHistory = ({ id, ...query }: ReadSingleItemsPageHistoryParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPageHistoryData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_history/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_member items.
 *
 * @tags Items, ItemsPageMember
 * @name ReadItemsPageMember
 * @summary List Items
 * @request GET:/items/page_member
 * @secure
 * @response `200` `ReadItemsPageMemberData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageMember = (query: ReadItemsPageMemberParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageMemberData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_member`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_member item by unique identifier.
 *
 * @tags Items, ItemsPageMember
 * @name ReadSingleItemsPageMember
 * @summary Retrieve an Item
 * @request GET:/items/page_member/{id}
 * @response `200` `ReadSingleItemsPageMemberData` Successful request
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
  readSingleItemsPageMember = ({ id, ...query }: ReadSingleItemsPageMemberParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPageMemberData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_member/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the contact_address items.
 *
 * @tags Items, ItemsContactAddress
 * @name ReadItemsContactAddress
 * @summary List Items
 * @request GET:/items/contact_address
 * @secure
 * @response `200` `ReadItemsContactAddressData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsContactAddress = (query: ReadItemsContactAddressParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsContactAddressData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/contact_address`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single contact_address item by unique identifier.
 *
 * @tags Items, ItemsContactAddress
 * @name ReadSingleItemsContactAddress
 * @summary Retrieve an Item
 * @request GET:/items/contact_address/{id}
 * @response `200` `ReadSingleItemsContactAddressData` Successful request
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
  readSingleItemsContactAddress = ({ id, ...query }: ReadSingleItemsContactAddressParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsContactAddressData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/contact_address/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_receive_nodes items.
 *
 * @tags Items, ItemsPageReceiveNodes
 * @name ReadItemsPageReceiveNodes
 * @summary List Items
 * @request GET:/items/page_receive_nodes
 * @secure
 * @response `200` `ReadItemsPageReceiveNodesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageReceiveNodes = (query: ReadItemsPageReceiveNodesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageReceiveNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_receive_nodes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_receive_nodes item by unique identifier.
 *
 * @tags Items, ItemsPageReceiveNodes
 * @name ReadSingleItemsPageReceiveNodes
 * @summary Retrieve an Item
 * @request GET:/items/page_receive_nodes/{id}
 * @response `200` `ReadSingleItemsPageReceiveNodesData` Successful request
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
  readSingleItemsPageReceiveNodes = (
    { id, ...query }: ReadSingleItemsPageReceiveNodesParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageReceiveNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_receive_nodes/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_history_nodes items.
 *
 * @tags Items, ItemsPageHistoryNodes
 * @name ReadItemsPageHistoryNodes
 * @summary List Items
 * @request GET:/items/page_history_nodes
 * @secure
 * @response `200` `ReadItemsPageHistoryNodesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageHistoryNodes = (query: ReadItemsPageHistoryNodesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageHistoryNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_history_nodes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_history_nodes item by unique identifier.
 *
 * @tags Items, ItemsPageHistoryNodes
 * @name ReadSingleItemsPageHistoryNodes
 * @summary Retrieve an Item
 * @request GET:/items/page_history_nodes/{id}
 * @response `200` `ReadSingleItemsPageHistoryNodesData` Successful request
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
  readSingleItemsPageHistoryNodes = (
    { id, ...query }: ReadSingleItemsPageHistoryNodesParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageHistoryNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_history_nodes/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description Create a new orders item.
 *
 * @tags Items, ItemsOrders
 * @name CreateItemsOrders
 * @summary Create an Item
 * @request POST:/items/orders
 * @response `200` `CreateItemsOrdersData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  createItemsOrders = (query: CreateItemsOrdersParams, data: CreateItemsOrdersPayload, params: RequestParams = {}) =>
    this.request<
      CreateItemsOrdersData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/orders`,
      method: "POST",
      query: query,
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description List the orders items.
 *
 * @tags Items, ItemsOrders
 * @name ReadItemsOrders
 * @summary List Items
 * @request GET:/items/orders
 * @secure
 * @response `200` `ReadItemsOrdersData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsOrders = (query: ReadItemsOrdersParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsOrdersData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/orders`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Update multiple orders items at the same time.
   *
   * @tags Items, ItemsOrders
   * @name UpdateItemsOrders
   * @summary Update Multiple Items
   * @request PATCH:/items/orders
   * @response `200` `UpdateItemsOrdersData` Successful request
   */
  updateItemsOrders = (query: UpdateItemsOrdersParams, data: UpdateItemsOrdersPayload, params: RequestParams = {}) =>
    this.request<UpdateItemsOrdersData, any>({
      path: `/items/orders`,
      method: "PATCH",
      query: query,
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single orders item by unique identifier.
 *
 * @tags Items, ItemsOrders
 * @name ReadSingleItemsOrders
 * @summary Retrieve an Item
 * @request GET:/items/orders/{id}
 * @response `200` `ReadSingleItemsOrdersData` Successful request
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
  readSingleItemsOrders = ({ id, ...query }: ReadSingleItemsOrdersParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsOrdersData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/orders/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description Update an existing orders item.
 *
 * @tags Items, ItemsOrders
 * @name UpdateSingleItemsOrders
 * @summary Update an Item
 * @request PATCH:/items/orders/{id}
 * @response `200` `UpdateSingleItemsOrdersData` Successful request
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
  updateSingleItemsOrders = (
    { id, ...query }: UpdateSingleItemsOrdersParams,
    data: ItemsOrders,
    params: RequestParams = {},
  ) =>
    this.request<
      UpdateSingleItemsOrdersData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/orders/${id}`,
      method: "PATCH",
      query: query,
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description List the events items.
 *
 * @tags Items, ItemsEvents
 * @name ReadItemsEvents
 * @summary List Items
 * @request GET:/items/events
 * @secure
 * @response `200` `ReadItemsEventsData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsEvents = (query: ReadItemsEventsParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsEventsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/events`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single events item by unique identifier.
 *
 * @tags Items, ItemsEvents
 * @name ReadSingleItemsEvents
 * @summary Retrieve an Item
 * @request GET:/items/events/{id}
 * @response `200` `ReadSingleItemsEventsData` Successful request
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
  readSingleItemsEvents = ({ id, ...query }: ReadSingleItemsEventsParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsEventsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/events/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the statements items.
 *
 * @tags Items, ItemsStatements
 * @name ReadItemsStatements
 * @summary List Items
 * @request GET:/items/statements
 * @secure
 * @response `200` `ReadItemsStatementsData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsStatements = (query: ReadItemsStatementsParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsStatementsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/statements`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single statements item by unique identifier.
 *
 * @tags Items, ItemsStatements
 * @name ReadSingleItemsStatements
 * @summary Retrieve an Item
 * @request GET:/items/statements/{id}
 * @response `200` `ReadSingleItemsStatementsData` Successful request
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
  readSingleItemsStatements = ({ id, ...query }: ReadSingleItemsStatementsParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsStatementsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/statements/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the events_files items.
 *
 * @tags Items, ItemsEventsFiles
 * @name ReadItemsEventsFiles
 * @summary List Items
 * @request GET:/items/events_files
 * @secure
 * @response `200` `ReadItemsEventsFilesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsEventsFiles = (query: ReadItemsEventsFilesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsEventsFilesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/events_files`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single events_files item by unique identifier.
 *
 * @tags Items, ItemsEventsFiles
 * @name ReadSingleItemsEventsFiles
 * @summary Retrieve an Item
 * @request GET:/items/events_files/{id}
 * @response `200` `ReadSingleItemsEventsFilesData` Successful request
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
  readSingleItemsEventsFiles = ({ id, ...query }: ReadSingleItemsEventsFilesParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsEventsFilesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/events_files/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the iframe items.
 *
 * @tags Items, ItemsIframe
 * @name ReadItemsIframe
 * @summary List Items
 * @request GET:/items/iframe
 * @secure
 * @response `200` `ReadItemsIframeData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsIframe = (query: ReadItemsIframeParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsIframeData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/iframe`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single iframe item by unique identifier.
 *
 * @tags Items, ItemsIframe
 * @name ReadSingleItemsIframe
 * @summary Retrieve an Item
 * @request GET:/items/iframe/{id}
 * @response `200` `ReadSingleItemsIframeData` Successful request
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
  readSingleItemsIframe = ({ id, ...query }: ReadSingleItemsIframeParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsIframeData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/iframe/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the events_event_shows items.
 *
 * @tags Items, ItemsEventsEventShows
 * @name ReadItemsEventsEventShows
 * @summary List Items
 * @request GET:/items/events_event_shows
 * @secure
 * @response `200` `ReadItemsEventsEventShowsData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsEventsEventShows = (query: ReadItemsEventsEventShowsParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsEventsEventShowsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/events_event_shows`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single events_event_shows item by unique identifier.
 *
 * @tags Items, ItemsEventsEventShows
 * @name ReadSingleItemsEventsEventShows
 * @summary Retrieve an Item
 * @request GET:/items/events_event_shows/{id}
 * @response `200` `ReadSingleItemsEventsEventShowsData` Successful request
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
  readSingleItemsEventsEventShows = (
    { id, ...query }: ReadSingleItemsEventsEventShowsParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsEventsEventShowsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/events_event_shows/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the post items.
 *
 * @tags Items, ItemsPost
 * @name ReadItemsPost
 * @summary List Items
 * @request GET:/items/post
 * @secure
 * @response `200` `ReadItemsPostData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPost = (query: ReadItemsPostParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPostData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/post`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single post item by unique identifier.
 *
 * @tags Items, ItemsPost
 * @name ReadSingleItemsPost
 * @summary Retrieve an Item
 * @request GET:/items/post/{id}
 * @response `200` `ReadSingleItemsPostData` Successful request
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
  readSingleItemsPost = ({ id, ...query }: ReadSingleItemsPostParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPostData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/post/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the post_directus_users items.
 *
 * @tags Items, ItemsPostDirectusUsers
 * @name ReadItemsPostDirectusUsers
 * @summary List Items
 * @request GET:/items/post_directus_users
 * @secure
 * @response `200` `ReadItemsPostDirectusUsersData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPostDirectusUsers = (query: ReadItemsPostDirectusUsersParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPostDirectusUsersData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/post_directus_users`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single post_directus_users item by unique identifier.
 *
 * @tags Items, ItemsPostDirectusUsers
 * @name ReadSingleItemsPostDirectusUsers
 * @summary Retrieve an Item
 * @request GET:/items/post_directus_users/{id}
 * @response `200` `ReadSingleItemsPostDirectusUsersData` Successful request
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
  readSingleItemsPostDirectusUsers = (
    { id, ...query }: ReadSingleItemsPostDirectusUsersParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPostDirectusUsersData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/post_directus_users/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the post_editor_nodes items.
 *
 * @tags Items, ItemsPostEditorNodes
 * @name ReadItemsPostEditorNodes
 * @summary List Items
 * @request GET:/items/post_editor_nodes
 * @secure
 * @response `200` `ReadItemsPostEditorNodesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPostEditorNodes = (query: ReadItemsPostEditorNodesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPostEditorNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/post_editor_nodes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single post_editor_nodes item by unique identifier.
 *
 * @tags Items, ItemsPostEditorNodes
 * @name ReadSingleItemsPostEditorNodes
 * @summary Retrieve an Item
 * @request GET:/items/post_editor_nodes/{id}
 * @response `200` `ReadSingleItemsPostEditorNodesData` Successful request
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
  readSingleItemsPostEditorNodes = (
    { id, ...query }: ReadSingleItemsPostEditorNodesParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPostEditorNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/post_editor_nodes/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the event_shows items.
 *
 * @tags Items, ItemsEventShows
 * @name ReadItemsEventShows
 * @summary List Items
 * @request GET:/items/event_shows
 * @secure
 * @response `200` `ReadItemsEventShowsData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsEventShows = (query: ReadItemsEventShowsParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsEventShowsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/event_shows`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single event_shows item by unique identifier.
 *
 * @tags Items, ItemsEventShows
 * @name ReadSingleItemsEventShows
 * @summary Retrieve an Item
 * @request GET:/items/event_shows/{id}
 * @response `200` `ReadSingleItemsEventShowsData` Successful request
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
  readSingleItemsEventShows = ({ id, ...query }: ReadSingleItemsEventShowsParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsEventShowsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/event_shows/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the post_files items.
 *
 * @tags Items, ItemsPostFiles
 * @name ReadItemsPostFiles
 * @summary List Items
 * @request GET:/items/post_files
 * @secure
 * @response `200` `ReadItemsPostFilesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPostFiles = (query: ReadItemsPostFilesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPostFilesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/post_files`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single post_files item by unique identifier.
 *
 * @tags Items, ItemsPostFiles
 * @name ReadSingleItemsPostFiles
 * @summary Retrieve an Item
 * @request GET:/items/post_files/{id}
 * @response `200` `ReadSingleItemsPostFilesData` Successful request
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
  readSingleItemsPostFiles = ({ id, ...query }: ReadSingleItemsPostFilesParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPostFilesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/post_files/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the events_editor_nodes items.
 *
 * @tags Items, ItemsEventsEditorNodes
 * @name ReadItemsEventsEditorNodes
 * @summary List Items
 * @request GET:/items/events_editor_nodes
 * @secure
 * @response `200` `ReadItemsEventsEditorNodesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsEventsEditorNodes = (query: ReadItemsEventsEditorNodesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsEventsEditorNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/events_editor_nodes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single events_editor_nodes item by unique identifier.
 *
 * @tags Items, ItemsEventsEditorNodes
 * @name ReadSingleItemsEventsEditorNodes
 * @summary Retrieve an Item
 * @request GET:/items/events_editor_nodes/{id}
 * @response `200` `ReadSingleItemsEventsEditorNodesData` Successful request
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
  readSingleItemsEventsEditorNodes = (
    { id, ...query }: ReadSingleItemsEventsEditorNodesParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsEventsEditorNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/events_editor_nodes/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the tags items.
 *
 * @tags Items, ItemsTags
 * @name ReadItemsTags
 * @summary List Items
 * @request GET:/items/tags
 * @secure
 * @response `200` `ReadItemsTagsData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsTags = (query: ReadItemsTagsParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsTagsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/tags`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single tags item by unique identifier.
 *
 * @tags Items, ItemsTags
 * @name ReadSingleItemsTags
 * @summary Retrieve an Item
 * @request GET:/items/tags/{id}
 * @response `200` `ReadSingleItemsTagsData` Successful request
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
  readSingleItemsTags = ({ id, ...query }: ReadSingleItemsTagsParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsTagsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/tags/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the post_tags_1 items.
 *
 * @tags Items, ItemsPostTags1
 * @name ReadItemsPostTags1
 * @summary List Items
 * @request GET:/items/post_tags_1
 * @secure
 * @response `200` `ReadItemsPostTags1Data` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPostTags1 = (query: ReadItemsPostTags1Params, params: RequestParams = {}) =>
    this.request<
      ReadItemsPostTags1Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/post_tags_1`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single post_tags_1 item by unique identifier.
 *
 * @tags Items, ItemsPostTags1
 * @name ReadSingleItemsPostTags1
 * @summary Retrieve an Item
 * @request GET:/items/post_tags_1/{id}
 * @response `200` `ReadSingleItemsPostTags1Data` Successful request
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
  readSingleItemsPostTags1 = ({ id, ...query }: ReadSingleItemsPostTags1Params, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPostTags1Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/post_tags_1/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the audio_player_files items.
 *
 * @tags Items, ItemsAudioPlayerFiles
 * @name ReadItemsAudioPlayerFiles
 * @summary List Items
 * @request GET:/items/audio_player_files
 * @secure
 * @response `200` `ReadItemsAudioPlayerFilesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsAudioPlayerFiles = (query: ReadItemsAudioPlayerFilesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsAudioPlayerFilesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/audio_player_files`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single audio_player_files item by unique identifier.
 *
 * @tags Items, ItemsAudioPlayerFiles
 * @name ReadSingleItemsAudioPlayerFiles
 * @summary Retrieve an Item
 * @request GET:/items/audio_player_files/{id}
 * @response `200` `ReadSingleItemsAudioPlayerFilesData` Successful request
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
  readSingleItemsAudioPlayerFiles = (
    { id, ...query }: ReadSingleItemsAudioPlayerFilesParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsAudioPlayerFilesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/audio_player_files/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the audio_player items.
 *
 * @tags Items, ItemsAudioPlayer
 * @name ReadItemsAudioPlayer
 * @summary List Items
 * @request GET:/items/audio_player
 * @secure
 * @response `200` `ReadItemsAudioPlayerData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsAudioPlayer = (query: ReadItemsAudioPlayerParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsAudioPlayerData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/audio_player`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single audio_player item by unique identifier.
 *
 * @tags Items, ItemsAudioPlayer
 * @name ReadSingleItemsAudioPlayer
 * @summary Retrieve an Item
 * @request GET:/items/audio_player/{id}
 * @response `200` `ReadSingleItemsAudioPlayerData` Successful request
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
  readSingleItemsAudioPlayer = ({ id, ...query }: ReadSingleItemsAudioPlayerParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsAudioPlayerData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/audio_player/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_join items.
 *
 * @tags Items, ItemsPageJoin
 * @name ReadItemsPageJoin
 * @summary List Items
 * @request GET:/items/page_join
 * @secure
 * @response `200` `ReadItemsPageJoinData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageJoin = (query: ReadItemsPageJoinParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageJoinData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_join`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_join item by unique identifier.
 *
 * @tags Items, ItemsPageJoin
 * @name ReadSingleItemsPageJoin
 * @summary Retrieve an Item
 * @request GET:/items/page_join/{id}
 * @response `200` `ReadSingleItemsPageJoinData` Successful request
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
  readSingleItemsPageJoin = ({ id, ...query }: ReadSingleItemsPageJoinParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPageJoinData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_join/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_join_nodes items.
 *
 * @tags Items, ItemsPageJoinNodes
 * @name ReadItemsPageJoinNodes
 * @summary List Items
 * @request GET:/items/page_join_nodes
 * @secure
 * @response `200` `ReadItemsPageJoinNodesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageJoinNodes = (query: ReadItemsPageJoinNodesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageJoinNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_join_nodes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_join_nodes item by unique identifier.
 *
 * @tags Items, ItemsPageJoinNodes
 * @name ReadSingleItemsPageJoinNodes
 * @summary Retrieve an Item
 * @request GET:/items/page_join_nodes/{id}
 * @response `200` `ReadSingleItemsPageJoinNodesData` Successful request
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
  readSingleItemsPageJoinNodes = ({ id, ...query }: ReadSingleItemsPageJoinNodesParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPageJoinNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_join_nodes/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_internship_nodes items.
 *
 * @tags Items, ItemsPageInternshipNodes
 * @name ReadItemsPageInternshipNodes
 * @summary List Items
 * @request GET:/items/page_internship_nodes
 * @secure
 * @response `200` `ReadItemsPageInternshipNodesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageInternshipNodes = (query: ReadItemsPageInternshipNodesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageInternshipNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_internship_nodes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_internship_nodes item by unique identifier.
 *
 * @tags Items, ItemsPageInternshipNodes
 * @name ReadSingleItemsPageInternshipNodes
 * @summary Retrieve an Item
 * @request GET:/items/page_internship_nodes/{id}
 * @response `200` `ReadSingleItemsPageInternshipNodesData` Successful request
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
  readSingleItemsPageInternshipNodes = (
    { id, ...query }: ReadSingleItemsPageInternshipNodesParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageInternshipNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_internship_nodes/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the internships items.
 *
 * @tags Items, ItemsInternships
 * @name ReadItemsInternships
 * @summary List Items
 * @request GET:/items/internships
 * @secure
 * @response `200` `ReadItemsInternshipsData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsInternships = (query: ReadItemsInternshipsParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsInternshipsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/internships`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single internships item by unique identifier.
 *
 * @tags Items, ItemsInternships
 * @name ReadSingleItemsInternships
 * @summary Retrieve an Item
 * @request GET:/items/internships/{id}
 * @response `200` `ReadSingleItemsInternshipsData` Successful request
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
  readSingleItemsInternships = ({ id, ...query }: ReadSingleItemsInternshipsParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsInternshipsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/internships/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_internship_internships items.
 *
 * @tags Items, ItemsPageInternshipInternships
 * @name ReadItemsPageInternshipInternships
 * @summary List Items
 * @request GET:/items/page_internship_internships
 * @secure
 * @response `200` `ReadItemsPageInternshipInternshipsData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageInternshipInternships = (query: ReadItemsPageInternshipInternshipsParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageInternshipInternshipsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_internship_internships`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_internship_internships item by unique identifier.
 *
 * @tags Items, ItemsPageInternshipInternships
 * @name ReadSingleItemsPageInternshipInternships
 * @summary Retrieve an Item
 * @request GET:/items/page_internship_internships/{id}
 * @response `200` `ReadSingleItemsPageInternshipInternshipsData` Successful request
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
  readSingleItemsPageInternshipInternships = (
    { id, ...query }: ReadSingleItemsPageInternshipInternshipsParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageInternshipInternshipsData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_internship_internships/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_internship items.
 *
 * @tags Items, ItemsPageInternship
 * @name ReadItemsPageInternship
 * @summary List Items
 * @request GET:/items/page_internship
 * @secure
 * @response `200` `ReadItemsPageInternshipData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageInternship = (query: ReadItemsPageInternshipParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageInternshipData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_internship`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_internship item by unique identifier.
 *
 * @tags Items, ItemsPageInternship
 * @name ReadSingleItemsPageInternship
 * @summary Retrieve an Item
 * @request GET:/items/page_internship/{id}
 * @response `200` `ReadSingleItemsPageInternshipData` Successful request
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
  readSingleItemsPageInternship = ({ id, ...query }: ReadSingleItemsPageInternshipParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPageInternshipData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_internship/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_classes items.
 *
 * @tags Items, ItemsPageClasses
 * @name ReadItemsPageClasses
 * @summary List Items
 * @request GET:/items/page_classes
 * @secure
 * @response `200` `ReadItemsPageClassesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageClasses = (query: ReadItemsPageClassesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageClassesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_classes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_classes item by unique identifier.
 *
 * @tags Items, ItemsPageClasses
 * @name ReadSingleItemsPageClasses
 * @summary Retrieve an Item
 * @request GET:/items/page_classes/{id}
 * @response `200` `ReadSingleItemsPageClassesData` Successful request
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
  readSingleItemsPageClasses = ({ id, ...query }: ReadSingleItemsPageClassesParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsPageClassesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_classes/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_classes_nodes items.
 *
 * @tags Items, ItemsPageClassesNodes
 * @name ReadItemsPageClassesNodes
 * @summary List Items
 * @request GET:/items/page_classes_nodes
 * @secure
 * @response `200` `ReadItemsPageClassesNodesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageClassesNodes = (query: ReadItemsPageClassesNodesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageClassesNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_classes_nodes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_classes_nodes item by unique identifier.
 *
 * @tags Items, ItemsPageClassesNodes
 * @name ReadSingleItemsPageClassesNodes
 * @summary Retrieve an Item
 * @request GET:/items/page_classes_nodes/{id}
 * @response `200` `ReadSingleItemsPageClassesNodesData` Successful request
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
  readSingleItemsPageClassesNodes = (
    { id, ...query }: ReadSingleItemsPageClassesNodesParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageClassesNodesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_classes_nodes/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the classes items.
 *
 * @tags Items, ItemsClasses
 * @name ReadItemsClasses
 * @summary List Items
 * @request GET:/items/classes
 * @secure
 * @response `200` `ReadItemsClassesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsClasses = (query: ReadItemsClassesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsClassesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/classes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single classes item by unique identifier.
 *
 * @tags Items, ItemsClasses
 * @name ReadSingleItemsClasses
 * @summary Retrieve an Item
 * @request GET:/items/classes/{id}
 * @response `200` `ReadSingleItemsClassesData` Successful request
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
  readSingleItemsClasses = ({ id, ...query }: ReadSingleItemsClassesParams, params: RequestParams = {}) =>
    this.request<
      ReadSingleItemsClassesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/classes/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_classes_classes items.
 *
 * @tags Items, ItemsPageClassesClasses
 * @name ReadItemsPageClassesClasses
 * @summary List Items
 * @request GET:/items/page_classes_classes
 * @secure
 * @response `200` `ReadItemsPageClassesClassesData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageClassesClasses = (query: ReadItemsPageClassesClassesParams, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageClassesClassesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_classes_classes`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_classes_classes item by unique identifier.
 *
 * @tags Items, ItemsPageClassesClasses
 * @name ReadSingleItemsPageClassesClasses
 * @summary Retrieve an Item
 * @request GET:/items/page_classes_classes/{id}
 * @response `200` `ReadSingleItemsPageClassesClassesData` Successful request
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
  readSingleItemsPageClassesClasses = (
    { id, ...query }: ReadSingleItemsPageClassesClassesParams,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageClassesClassesData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_classes_classes/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description List the page_history_files_1 items.
 *
 * @tags Items, ItemsPageHistoryFiles1
 * @name ReadItemsPageHistoryFiles1
 * @summary List Items
 * @request GET:/items/page_history_files_1
 * @secure
 * @response `200` `ReadItemsPageHistoryFiles1Data` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  readItemsPageHistoryFiles1 = (query: ReadItemsPageHistoryFiles1Params, params: RequestParams = {}) =>
    this.request<
      ReadItemsPageHistoryFiles1Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_history_files_1`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single page_history_files_1 item by unique identifier.
 *
 * @tags Items, ItemsPageHistoryFiles1
 * @name ReadSingleItemsPageHistoryFiles1
 * @summary Retrieve an Item
 * @request GET:/items/page_history_files_1/{id}
 * @response `200` `ReadSingleItemsPageHistoryFiles1Data` Successful request
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
  readSingleItemsPageHistoryFiles1 = (
    { id, ...query }: ReadSingleItemsPageHistoryFiles1Params,
    params: RequestParams = {},
  ) =>
    this.request<
      ReadSingleItemsPageHistoryFiles1Data,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/items/page_history_files_1/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
