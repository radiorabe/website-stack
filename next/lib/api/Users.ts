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

import { GetMeData, GetMeParams, GetUserData, GetUserParams, GetUsersData, GetUsersParams } from "./data-contracts";
import { HttpClient, RequestParams } from "./http-client";

export class Users<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
 * @description List the users.
 *
 * @tags Users
 * @name GetUsers
 * @summary List Users
 * @request GET:/users
 * @response `200` `GetUsersData` Successful request
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
  getUsers = (query: GetUsersParams, params: RequestParams = {}) =>
    this.request<
      GetUsersData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/users`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve a single user by unique identifier.
 *
 * @tags Users
 * @name GetUser
 * @summary Retrieve a User
 * @request GET:/users/{id}
 * @response `200` `GetUserData` Successful request
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
  getUser = ({ id, ...query }: GetUserParams, params: RequestParams = {}) =>
    this.request<
      GetUserData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/users/${id}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
 * @description Retrieve the currently authenticated user.
 *
 * @tags Users
 * @name GetMe
 * @summary Retrieve Current User
 * @request GET:/users/me
 * @response `200` `GetMeData` Successful request
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
  getMe = (query: GetMeParams, params: RequestParams = {}) =>
    this.request<
      GetMeData,
      {
        error?: {
          /** @format int64 */
          code?: number;
          message?: string;
        };
      }
    >({
      path: `/users/me`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
