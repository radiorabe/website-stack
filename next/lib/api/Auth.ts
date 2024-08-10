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
  LoginData,
  LoginPayload,
  LogoutData,
  LogoutPayload,
  OauthData,
  OauthProviderData,
  OauthProviderParams,
  PasswordRequestPayload,
  PasswordResetPayload,
  RefreshData,
  RefreshPayload,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Retrieve a Temporary Access Token
   *
   * @tags Authentication
   * @name Login
   * @summary Retrieve a Temporary Access Token
   * @request POST:/auth/login
   * @response `200` `LoginData` Successful authentification
   */
  login = (data: LoginPayload, params: RequestParams = {}) =>
    this.request<LoginData, any>({
      path: `/auth/login`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
 * @description Refresh a Temporary Access Token.
 *
 * @tags Authentication
 * @name Refresh
 * @summary Refresh Token
 * @request POST:/auth/refresh
 * @response `200` `RefreshData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  refresh = (data: RefreshPayload, params: RequestParams = {}) =>
    this.request<
      RefreshData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/auth/refresh`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Log Out
   *
   * @tags Authentication
   * @name Logout
   * @summary Log Out
   * @request POST:/auth/logout
   * @response `200` `LogoutData` Request successful
   */
  logout = (data: LogoutPayload, params: RequestParams = {}) =>
    this.request<LogoutData, any>({
      path: `/auth/logout`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
 * @description Request a reset password email to be send.
 *
 * @tags Authentication
 * @name PasswordRequest
 * @summary Request a Password Reset
 * @request POST:/auth/password/request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  passwordRequest = (data: PasswordRequestPayload, params: RequestParams = {}) =>
    this.request<
      any,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/auth/password/request`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
 * @description The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password.
 *
 * @tags Authentication
 * @name PasswordReset
 * @summary Reset a Password
 * @request POST:/auth/password/reset
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  passwordReset = (data: PasswordResetPayload, params: RequestParams = {}) =>
    this.request<
      any,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/auth/password/reset`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
 * @description List configured OAuth providers.
 *
 * @tags Authentication
 * @name Oauth
 * @summary List OAuth Providers
 * @request GET:/auth/oauth
 * @response `200` `OauthData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  oauth = (params: RequestParams = {}) =>
    this.request<
      OauthData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/auth/oauth`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
 * @description Start OAuth flow using the specified provider
 *
 * @tags Authentication
 * @name OauthProvider
 * @summary Authenticated using an OAuth provider
 * @request GET:/auth/oauth/{provider}
 * @response `200` `OauthProviderData` Successful request
 * @response `401` `{
    error?: {
  \** @format int64 *\
    code?: number,
    message?: string,

},

}`
 */
  oauthProvider = ({ provider, ...query }: OauthProviderParams, params: RequestParams = {}) =>
    this.request<
      OauthProviderData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/auth/oauth/${provider}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
