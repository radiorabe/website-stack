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

export interface Query {
  /**
   * Control what fields are being returned in the object.
   * @example ["*","*.*"]
   */
  fields?: string[];
  /** @example {"<field>":{"<operator>":"<value>"}} */
  filter?: object;
  /** Filter by items that contain the given search query in one of their fields. */
  search?: string;
  /**
   * How to sort the returned items.
   * @example ["-date_created"]
   */
  sort?: string[];
  /** Set the maximum number of items that will be returned */
  limit?: number;
  /** How many items to skip when fetching data. */
  offset?: number;
  /** Cursor for use in pagination. Often used in combination with limit. */
  page?: number;
  /**
   * Deep allows you to set any of the other query parameters on a nested relational dataset.
   * @example {"related_articles":{"_limit":3}}
   */
  deep?: object;
}

export interface XMetadata {
  /** Returns the total item count of the collection you're querying. */
  total_count?: number;
  /** Returns the item count of the collection you're querying, taking the current filter/search parameters into account. */
  filter_count?: number;
}

export interface ItemsAboutRabe {
  id?: number;
  /** @format uuid */
  user_updated?: string | null;
  /** @format timestamp */
  date_updated?: string | null;
}

export interface ItemsFooter {
  id?: number;
  /** @format uuid */
  user_updated?: string | null;
  /** @format timestamp */
  date_updated?: string | null;
  Links?: (number | ItemsFooterLinks)[] | null;
}

export interface ItemsFooterLinks {
  id?: number;
  Footer_id?: number | ItemsFooter | null;
  item?: (string | ItemsTextLinks)[] | null;
  collection?: string | null;
  Sortieren?: number | null;
}

export interface ItemsHome {
  id?: number;
  /** @format uuid */
  user_updated?: string | null;
  /** @format timestamp */
  date_updated?: string | null;
}

export interface ItemsImpressum {
  id?: number;
  /** @format uuid */
  user_created?: string | null;
  /** @format uuid */
  user_updated?: string | null;
  /** @format timestamp */
  date_updated?: string | null;
  Strasse?: string | null;
  Firmennamen?: string | null;
  Nummer?: string | null;
  PLZ?: string | null;
  Ort?: string | null;
  EMailAdresse?: string | null;
  Telefonnummer?: string | null;
}

export interface ItemsTextLinks {
  id?: number;
  /** @format uuid */
  user_updated?: string | null;
  /** @format timestamp */
  date_updated?: string | null;
  Sichtbarer_Text?: string | null;
  URL?: string | null;
}

export interface GetAssetParams {
  /** The key of the asset size configured in settings. */
  key?: string;
  /** A JSON array of image transformations */
  transforms?: string;
  /** Download the asset to your computer */
  download?: boolean;
  /** The id of the file. */
  id: string;
}

export type GetAssetData = string;

export interface LoginPayload {
  /**
   * Email address of the user you're retrieving the access token for.
   * @example "admin@example.com"
   */
  email: string;
  /**
   * Password of the user.
   * @format password
   * @example "password"
   */
  password: string;
  /**
   * Whether to retrieve the refresh token in the JSON response, or in a httpOnly cookie.
   * @default "json"
   */
  mode?: "json" | "cookie" | "session";
  /** The user's one-time-password (if MFA is enabled). */
  otp?: string;
}

export interface LoginData {
  data?: {
    /** @example "eyJhbGciOiJI..." */
    access_token?: string;
    /** @example 900 */
    expires?: number;
    /** @example "yuOJkjdPXMd..." */
    refresh_token?: string;
  };
}

export interface RefreshPayload {
  /**
   * JWT access token you want to refresh. This token can't be expired.
   * @example "eyJ0eXAiOiJKV..."
   */
  refresh_token?: string;
  /**
   * Whether to submit and retrieve the refresh token in the JSON response, or in a httpOnly cookie.
   * @default "json"
   */
  mode?: "json" | "cookie" | "session";
}

export interface RefreshData {
  data?: {
    /** @example "eyJhbGciOiJI..." */
    access_token?: string;
    /** @example 900 */
    expires?: number;
    /** @example "Gy-caJMpmGTA..." */
    refresh_token?: string;
  };
}

export interface LogoutPayload {
  /**
   * The refresh token to invalidate. If you have the refresh token in a cookie through /auth/login, you don't have to submit it here.
   * @example "eyJ0eXAiOiJKV..."
   */
  refresh_token?: string;
  /** Whether the refresh token is submitted in the JSON response, or in a httpOnly cookie. */
  mode?: "json" | "cookie" | "session";
}

export type LogoutData = any;

export interface PasswordRequestPayload {
  /**
   * Email address of the user you're requesting a reset for.
   * @example "admin@example.com"
   */
  email: string;
}

export interface PasswordResetPayload {
  /**
   * One-time use JWT token that is used to verify the user.
   * @example "eyJ0eXAiOiJKV1Qi..."
   */
  token: string;
  /**
   * New password for the user.
   * @format password
   * @example "password"
   */
  password: string;
}

export interface OauthData {
  public?: boolean;
  /** @example ["github","facebook"] */
  data?: string[];
}

export interface OauthProviderParams {
  /** Where to redirect on successful login.<br/>If set the authentication details are set inside cookies otherwise a JSON is returned. */
  redirect?: string;
  /** Key of the activated OAuth provider. */
  provider: string;
}

export interface OauthProviderData {
  public?: boolean;
  data?: {
    token?: string;
  };
}

export interface ServerInfoParams {
  /** The first time you create a project, the provided token will be saved and required for subsequent project installs. It can also be found and configured in `/config/__api.json` on your server. */
  super_admin_token: number;
}

export interface ServerInfoData {
  data?: object;
}

/**
 * @pattern pong
 * @example "pong"
 */
export type PingData = string;

export interface ReadItemsAboutRabeParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** A limit on the number of objects that are returned. */
  limit?: number;
  /** What metadata to return in the response. */
  meta?: string;
  /** How many items to skip when fetching data. */
  offset?: number;
  /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
  sort?: string[];
  /** Select items in collection by given conditions. */
  filter?: object;
  /** Filter by items that contain the given search query in one of their fields. */
  search?: string;
}

export interface ReadItemsAboutRabeData {
  data?: ItemsAboutRabe[];
  meta?: XMetadata;
}

export interface ReadSingleItemsAboutRabeParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsAboutRabeData {
  data?: ItemsAboutRabe;
}

export interface ReadItemsFooterParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** A limit on the number of objects that are returned. */
  limit?: number;
  /** What metadata to return in the response. */
  meta?: string;
  /** How many items to skip when fetching data. */
  offset?: number;
  /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
  sort?: string[];
  /** Select items in collection by given conditions. */
  filter?: object;
  /** Filter by items that contain the given search query in one of their fields. */
  search?: string;
}

export interface ReadItemsFooterData {
  data?: ItemsFooter[];
  meta?: XMetadata;
}

export interface ReadSingleItemsFooterParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsFooterData {
  data?: ItemsFooter;
}

export interface ReadItemsFooterLinksParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** A limit on the number of objects that are returned. */
  limit?: number;
  /** What metadata to return in the response. */
  meta?: string;
  /** How many items to skip when fetching data. */
  offset?: number;
  /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
  sort?: string[];
  /** Select items in collection by given conditions. */
  filter?: object;
  /** Filter by items that contain the given search query in one of their fields. */
  search?: string;
}

export interface ReadItemsFooterLinksData {
  data?: ItemsFooterLinks[];
  meta?: XMetadata;
}

export interface ReadSingleItemsFooterLinksParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsFooterLinksData {
  data?: ItemsFooterLinks;
}

export interface ReadItemsHomeParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** A limit on the number of objects that are returned. */
  limit?: number;
  /** What metadata to return in the response. */
  meta?: string;
  /** How many items to skip when fetching data. */
  offset?: number;
  /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
  sort?: string[];
  /** Select items in collection by given conditions. */
  filter?: object;
  /** Filter by items that contain the given search query in one of their fields. */
  search?: string;
}

export interface ReadItemsHomeData {
  data?: ItemsHome[];
  meta?: XMetadata;
}

export interface ReadSingleItemsHomeParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsHomeData {
  data?: ItemsHome;
}

export interface ReadItemsImpressumParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** A limit on the number of objects that are returned. */
  limit?: number;
  /** What metadata to return in the response. */
  meta?: string;
  /** How many items to skip when fetching data. */
  offset?: number;
  /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
  sort?: string[];
  /** Select items in collection by given conditions. */
  filter?: object;
  /** Filter by items that contain the given search query in one of their fields. */
  search?: string;
}

export interface ReadItemsImpressumData {
  data?: ItemsImpressum[];
  meta?: XMetadata;
}

export interface ReadSingleItemsImpressumParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsImpressumData {
  data?: ItemsImpressum;
}

export interface ReadItemsTextLinksParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** A limit on the number of objects that are returned. */
  limit?: number;
  /** What metadata to return in the response. */
  meta?: string;
  /** How many items to skip when fetching data. */
  offset?: number;
  /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
  sort?: string[];
  /** Select items in collection by given conditions. */
  filter?: object;
  /** Filter by items that contain the given search query in one of their fields. */
  search?: string;
}

export interface ReadItemsTextLinksData {
  data?: ItemsTextLinks[];
  meta?: XMetadata;
}

export interface ReadSingleItemsTextLinksParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsTextLinksData {
  data?: ItemsTextLinks;
}
