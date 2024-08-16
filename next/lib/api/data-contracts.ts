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
  uploaded_by?: string | Users;
  /**
   * When the file was uploaded.
   * @format date-time
   * @example "2019-12-03T00:10:15+00:00"
   */
  uploaded_on?: string;
  modified_by?: string | Users | null;
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

export interface Users {
  /**
   * Unique identifier for the user.
   * @example "63716273-0f29-4648-8a2a-2af2948f6f78"
   */
  id?: string;
  /**
   * First name of the user.
   * @example "Admin"
   */
  first_name?: string;
  /**
   * Last name of the user.
   * @example "User"
   */
  last_name?: string;
  /**
   * Unique email address for the user.
   * @format email
   * @example "admin@example.com"
   */
  email?: string;
  /**
   * The user's title.
   * @example null
   */
  title?: string | null;
  /**
   * The user's description.
   * @example null
   */
  description?: string | null;
  /**
   * The user's tags.
   * @example null
   */
  tags?: string[] | null;
  /**
   * The user's avatar.
   * @example null
   */
  avatar?: string | Files | null;
  /**
   * The user's language used in Directus.
   * @example "en-US"
   */
  language?: string;
  /**
   * The 2FA secret string that's used to generate one time passwords.
   * @example null
   */
  tfa_secret?: string | null;
  /**
   * Status of the user.
   * @example "active"
   */
  status?: "active" | "invited" | "draft" | "suspended" | "deleted";
  /**
   * Unique identifier of the role of this user.
   * @example "2f24211d-d928-469a-aea3-3c8f53d4e426"
   */
  role?: string;
  /** Static token for the user. */
  token?: string | null;
  /**
   * When this user used the API last.
   * @format date-time
   * @example "2020-05-31T14:32:37Z"
   */
  last_access?: string | null;
  /**
   * Last page that the user was on.
   * @example "/my-project/settings/collections/a"
   */
  last_page?: string | null;
  provider?: string;
  external_identifier?: string | null;
  auth_data?: any;
  email_notifications?: boolean | null;
  appearance?: string | null;
  theme_dark?: string | null;
  theme_light?: string | null;
  theme_light_overrides?: any;
  theme_dark_overrides?: any;
  posts?: (number | ItemsPostsDirectusUsers1)[] | null;
  programs?: (number | ItemsProgramsDirectusUsers)[] | null;
}

export interface ItemsProgramsDirectusUsers {
  id?: number;
  programs_slug?: string | ItemsPrograms | null;
  directus_users_id?: string | Users | null;
}

export interface ItemsPrograms {
  /** Dies wird gebraucht für die URL der Sendung: www.rabe.ch/sendungen/slug Am besten der Name der Sendung eintragen. */
  slug?: string;
  status?: string;
  sort?: number | null;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  name?: string | null;
  description?: string | null;
  image?: string | Files | null;
  posts?: (string | ItemsPosts)[] | null;
  team?: (number | ItemsProgramsDirectusUsers)[] | null;
}

export interface ItemsPostsDirectusUsers1 {
  id?: number;
  posts_slug?: string | ItemsPosts | null;
  directus_users_id?: string | Users | null;
}

export interface ItemsPostsEditorNodes {
  /** @format uuid */
  id?: string;
  posts_slug?: string | ItemsPosts | null;
  item?: (string | ItemsQuote | ItemsInfoBox)[] | null;
  collection?: string | null;
}

export interface ItemsPagePrograms {
  id?: number;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  title?: string | null;
  text?: string | null;
}

export interface ItemsPageImpressum {
  id?: number;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  html?: string | null;
}

export interface ItemsQuote {
  id?: number;
  text?: string | null;
  info?: string | null;
  author?: string | null;
}

export interface ItemsPosts {
  slug?: string;
  status?: string;
  sort?: number | null;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  title?: string | null;
  image?: string | Files | null;
  /** @format date */
  date?: string | null;
  imageTitle?: string | null;
  imageText?: string | null;
  program?: string | ItemsPrograms | null;
  text?: any;
  audio?: string | Files | null;
  authors?: (number | ItemsPostsDirectusUsers1)[] | null;
  editor_nodes?: (string | ItemsPostsEditorNodes)[] | null;
}

export interface ItemsInfoBox {
  id?: number;
  title?: string | null;
  text?: any;
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

export interface GetUsersParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** A limit on the number of objects that are returned. */
  limit?: number;
  /** How many items to skip when fetching data. */
  offset?: number;
  /** What metadata to return in the response. */
  meta?: string;
  /** How to sort the returned items. `sort` is a CSV of fields used to sort the fetched items. Sorting defaults to ascending (ASC) order but a minus sign (` - `) can be used to reverse this to descending (DESC) order. Fields are prioritized by their order in the CSV. You can also use a ` ? ` to sort randomly. */
  sort?: string[];
  /** Select items in collection by given conditions. */
  filter?: object;
  /** Filter by items that contain the given search query in one of their fields. */
  search?: string;
}

export interface GetUsersData {
  data?: Users[];
  meta?: XMetadata;
}

export interface GetUserParams {
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

export interface GetUserData {
  data?: Users;
}

export interface GetMeParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
}

export interface GetMeData {
  data?: Users;
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

export interface ReadItemsPostsDirectusUsers1Params {
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

export interface ReadItemsPostsDirectusUsers1Data {
  data?: ItemsPostsDirectusUsers1[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPostsDirectusUsers1Params {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPostsDirectusUsers1Data {
  data?: ItemsPostsDirectusUsers1;
}

export interface ReadItemsPostsEditorNodesParams {
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

export interface ReadItemsPostsEditorNodesData {
  data?: ItemsPostsEditorNodes[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPostsEditorNodesParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPostsEditorNodesData {
  data?: ItemsPostsEditorNodes;
}

export interface ReadItemsPageProgramsParams {
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

export interface ReadItemsPageProgramsData {
  data?: ItemsPagePrograms[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageProgramsParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageProgramsData {
  data?: ItemsPagePrograms;
}

export interface ReadItemsPageImpressumParams {
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

export interface ReadItemsPageImpressumData {
  data?: ItemsPageImpressum[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageImpressumParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageImpressumData {
  data?: ItemsPageImpressum;
}

export interface ReadItemsQuoteParams {
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

export interface ReadItemsQuoteData {
  data?: ItemsQuote[];
  meta?: XMetadata;
}

export interface ReadSingleItemsQuoteParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsQuoteData {
  data?: ItemsQuote;
}

export interface ReadItemsPostsParams {
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

export interface ReadItemsPostsData {
  data?: ItemsPosts[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPostsParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPostsData {
  data?: ItemsPosts;
}

export interface ReadItemsInfoBoxParams {
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

export interface ReadItemsInfoBoxData {
  data?: ItemsInfoBox[];
  meta?: XMetadata;
}

export interface ReadSingleItemsInfoBoxParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsInfoBoxData {
  data?: ItemsInfoBox;
}
