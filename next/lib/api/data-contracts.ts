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

export interface Files {
  /**
   * Unique identifier for the file.
   * @example "8cbb43fe-4cdf-4991-8352-c461779cec02"
   */
  id?: string;
  /**
   * Where the file is stored. Either `local` for the local filesystem or the name of the storage adapter (for example `s3`).
   * @example "local"
   */
  storage?: string;
  /**
   * Name of the file on disk. By default, Directus uses a random hash for the filename.
   * @example "a88c3b72-ac58-5436-a4ec-b2858531333a.jpg"
   */
  filename_disk?: string;
  /**
   * How you want to the file to be named when it's being downloaded.
   * @example "avatar.jpg"
   */
  filename_download?: string;
  /**
   * Title for the file. Is extracted from the filename on upload, but can be edited by the user.
   * @example "User Avatar"
   */
  title?: string;
  /**
   * MIME type of the file.
   * @example "image/jpeg"
   */
  type?: string;
  /**
   * Virtual folder where this file resides in.
   * @example null
   */
  folder?: string | null;
  /**
   * Who uploaded the file.
   * @example "63716273-0f29-4648-8a2a-2af2948f6f78"
   */
  uploaded_by?: string;
  /**
   * When the file was uploaded.
   * @format date-time
   * @example "2019-12-03T00:10:15+00:00"
   */
  uploaded_on?: string;
  /** @format uuid */
  modified_by?: string | null;
  /** @format timestamp */
  modified_on?: string;
  /**
   * Character set of the file.
   * @example "binary"
   */
  charset?: string | null;
  /**
   * Size of the file in bytes.
   * @example 137862
   */
  filesize?: number;
  /**
   * Width of the file in pixels. Only applies to images.
   * @example 800
   */
  width?: number | null;
  /**
   * Height of the file in pixels. Only applies to images.
   * @example 838
   */
  height?: number | null;
  /**
   * Duration of the file in seconds. Only applies to audio and video.
   * @example 0
   */
  duration?: number | null;
  /**
   * Where the file was embedded from.
   * @example null
   */
  embed?: string | null;
  /** Description for the file. */
  description?: string | null;
  /** Where the file was created. Is automatically populated based on Exif data for images. */
  location?: string | null;
  /** Tags for the file. Is automatically populated based on Exif data for images. */
  tags?: string[] | null;
  /** IPTC, Exif, and ICC metadata extracted from file */
  metadata?: object | null;
  focal_point_x?: number | null;
  focal_point_y?: number | null;
}

export interface ItemsImpressum {
  id?: number;
  /** @format uuid */
  user_created?: string | null;
  /** @format timestamp */
  date_created?: string | null;
  /** @format uuid */
  user_updated?: string | null;
  /** @format timestamp */
  date_updated?: string | null;
  impressum?: string | null;
}

export interface ItemsHome {
  id?: number;
  /** @format uuid */
  user_updated?: string | null;
  /** @format timestamp */
  date_updated?: string | null;
}

export interface ItemsTextLinks {
  id?: number;
  visibleText?: string | null;
  url?: string | null;
}

export interface ItemsProgramsDirectusUsers {
  id?: number;
  programs_slug?: string | ItemsPrograms | null;
  /** @format uuid */
  directus_users_id?: string | null;
}

export interface ItemsSendungenInfo {
  id?: number;
  /** @format uuid */
  user_created?: string | null;
  /** @format timestamp */
  date_created?: string | null;
  /** @format uuid */
  user_updated?: string | null;
  /** @format timestamp */
  date_updated?: string | null;
  title?: string | null;
  text?: string | null;
}

export interface ItemsSendungen {
  id?: number;
  status?: string;
  sort?: number | null;
  /** @format uuid */
  user_created?: string | null;
  /** @format timestamp */
  date_created?: string | null;
  /** @format uuid */
  user_updated?: string | null;
  /** @format timestamp */
  date_updated?: string | null;
  name?: string | null;
  description?: string | null;
  image?: string | Files | null;
}

export interface ItemsPrograms {
  /** Dies wird gebraucht für die URL der Sendung: www.rabe.ch/sendungen/slug Am besten der Name der Sendung eintragen. */
  slug?: string;
  status?: string;
  sort?: number | null;
  /** @format uuid */
  user_created?: string | null;
  /** @format timestamp */
  date_created?: string | null;
  /** @format uuid */
  user_updated?: string | null;
  /** @format timestamp */
  date_updated?: string | null;
  name?: string | null;
  description?: string | null;
  image?: string | Files | null;
  team?: (number | ItemsProgramsDirectusUsers)[] | null;
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

export interface GetFilesParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** A limit on the number of objects that are returned. */
  limit?: number;
  /** How many items to skip when fetching data. */
  offset?: number;
  /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
  sort?: string[];
  /** Select items in collection by given conditions. */
  filter?: object;
  /** Filter by items that contain the given search query in one of their fields. */
  search?: string;
  /** What metadata to return in the response. */
  meta?: string;
}

export interface GetFilesData {
  data?: Files[];
  meta?: XMetadata;
}

export interface GetFileParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /**
   * Unique identifier for the object.
   * @example "8cbb43fe-4cdf-4991-8352-c461779cec02"
   */
  id: string;
}

export interface GetFileData {
  data?: Files;
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

export interface ReadItemsProgramsDirectusUsersParams {
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

export interface ReadItemsProgramsDirectusUsersData {
  data?: ItemsProgramsDirectusUsers[];
  meta?: XMetadata;
}

export interface ReadSingleItemsProgramsDirectusUsersParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsProgramsDirectusUsersData {
  data?: ItemsProgramsDirectusUsers;
}

export interface ReadItemsSendungenInfoParams {
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

export interface ReadItemsSendungenInfoData {
  data?: ItemsSendungenInfo[];
  meta?: XMetadata;
}

export interface ReadSingleItemsSendungenInfoParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsSendungenInfoData {
  data?: ItemsSendungenInfo;
}

export interface ReadItemsSendungenParams {
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

export interface ReadItemsSendungenData {
  data?: ItemsSendungen[];
  meta?: XMetadata;
}

export interface ReadSingleItemsSendungenParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsSendungenData {
  data?: ItemsSendungen;
}

export interface ReadItemsProgramsParams {
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

export interface ReadItemsProgramsData {
  data?: ItemsPrograms[];
  meta?: XMetadata;
}

export interface ReadSingleItemsProgramsParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsProgramsData {
  data?: ItemsPrograms;
}
