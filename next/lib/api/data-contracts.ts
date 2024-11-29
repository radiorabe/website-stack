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
  folder?: string | Folders | null;
  /**
   * Who uploaded the file.
   * @example "63716273-0f29-4648-8a2a-2af2948f6f78"
   */
  uploaded_by?: string | Users;
  /**
   * When the file was created.
   * @format date-time
   * @example "2019-12-03T00:10:15+00:00"
   */
  created_on?: string;
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
  tus_id?: string | null;
  tus_data?: any;
  /**
   * When the file was last uploaded/replaced.
   * @format date-time
   * @example "2019-12-03T00:10:15+00:00"
   */
  uploaded_on?: string;
}

export interface Folders {
  /**
   * Unique identifier for the folder.
   * @example "0cf0e03d-4364-45df-b77b-ca61f61869d2"
   */
  id?: string;
  /**
   * Name of the folder.
   * @example "New York"
   */
  name?: string;
  /**
   * Unique identifier of the parent folder. This allows for nested folders.
   * @example null
   */
  parent?: string | Folders | null;
}

export interface Roles {
  /**
   * Unique identifier for the role.
   * @example "2f24211d-d928-469a-aea3-3c8f53d4e426"
   */
  id?: string;
  /**
   * Name of the role.
   * @example "Administrator"
   */
  name?: string;
  /**
   * The role's icon.
   * @example "verified_user"
   */
  icon?: string;
  /**
   * Description of the role.
   * @example "Admins have access to all managed data within the system by default"
   */
  description?: string | null;
  /**
   * Array of IP addresses that are allowed to connect to the API as a user of this role.
   * @example []
   */
  ip_access?: string[];
  /**
   * Whether or not this role enforces the use of 2FA.
   * @example false
   */
  enforce_tfa?: boolean;
  /**
   * Admin role. If true, skips all permission checks.
   * @example false
   */
  admin_access?: boolean;
  /**
   * The users in the role are allowed to use the app.
   * @example true
   */
  app_access?: boolean;
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
  /** Password of the user. */
  password?: string;
  /**
   * The user's location.
   * @example null
   */
  location?: string | null;
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
  role?: string | Roles;
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
  policies?: string | null;
}

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

export interface ItemsProtocol {
  id?: number;
  name?: string | null;
  file?: string | Files | null;
}

export interface ItemsPageHistoryProtocol {
  id?: number;
  page_history_id?: number | ItemsPageHistory | null;
  protocol_id?: number | ItemsProtocol | null;
}

export interface ItemsPageContactContactAddress {
  id?: number;
  page_contact_id?: number | ItemsPageContact | null;
  contact_address_id?: number | ItemsContactAddress | null;
}

export interface ItemsImageBox {
  id?: number;
  image?: string | Files | null;
  text?: string | null;
  title?: string | null;
}

export interface ItemsPostsEditorNodes {
  /** @format uuid */
  id?: string;
  posts_slug?: string | ItemsPosts | null;
  item?: (string | ItemsQuote | ItemsInfoBox)[] | null;
  collection?: string | null;
}

export interface ItemsPageContactFiles {
  id?: number;
  page_contact_id?: number | ItemsPageContact | null;
  directus_files_id?: string | Files | null;
}

export interface ItemsPartyLocation {
  id?: number;
  url?: string | null;
  address_line_1?: string | null;
  address_line_2?: string | null;
  logo?: string | Files | null;
}

export interface ItemsPageMemberStatements {
  id?: number;
  page_member_id?: number | ItemsPageMember | null;
  statements_id?: number | ItemsStatements | null;
}

export interface ItemsMemberProduct {
  id?: number;
  status?: string;
  sort?: number | null;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  label?: string | null;
  price?: number | null;
  name?: string | null;
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
  team?: (number | ItemsProgramsDirectusUsers)[] | null;
  posts?: (number | ItemsPost)[] | null;
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
  /** Maximale Dateigrösse 100MB */
  audio?: string | Files | null;
  content?: any;
  authors?: (number | ItemsPostsDirectusUsers1)[] | null;
  editor_nodes?: (string | ItemsPostsEditorNodes)[] | null;
  audioFiles?: (number | ItemsPostsFiles1)[] | null;
}

export interface ItemsPageContact {
  id?: number;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  name?: string | null;
  street?: string | null;
  street_number?: string | null;
  plz?: string | null;
  city?: string | null;
  phone_number?: string | null;
  email?: string | null;
  studio_phone_number?: string | null;
  studio_email?: string | null;
  ombuds_name?: string | null;
  ombuds_street?: string | null;
  ombuds_street_number?: string | null;
  ombuds_plz?: string | null;
  ombuds_city?: string | null;
  ombuds_name_2?: string | null;
  ombuds_street_2?: string | null;
  ombuds_street_number_2?: string | null;
  ombuds_plz_2?: string | null;
  ombuds_city_2?: string | null;
  ombuds_postfach?: string | null;
  ombuds_postfach_2?: string | null;
  location?: object | null;
  contact_addresses?: (number | ItemsPageContactContactAddress)[] | null;
  partner_logos?: (number | ItemsPageContactFiles)[] | null;
}

export interface ItemsPostsDirectusUsers1 {
  id?: number;
  posts_slug?: string | ItemsPosts | null;
  directus_users_id?: string | Users | null;
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

export interface ItemsPageAgb {
  id?: number;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  content?: any;
}

export interface ItemsQuote {
  id?: number;
  text?: string | null;
  info?: string | null;
  author?: string | null;
}

export interface ItemsInfoBox {
  id?: number;
  title?: string | null;
  text?: any;
}

export interface ItemsPageImpressum {
  id?: number;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  content?: any;
}

export interface ItemsPageTeam {
  id?: number;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  text?: string | null;
  members_program?: (number | ItemsPageTeamDirectusUsers2)[] | null;
  members_management?: (number | ItemsPageTeamDirectusUsers1)[] | null;
  members_staff?: (number | ItemsPageTeamDirectusUsers)[] | null;
}

export interface ItemsPageProgramPrograms3 {
  id?: number;
  page_program_id?: number | ItemsPageProgram | null;
  programs_slug?: string | ItemsPrograms | null;
}

export interface ItemsPageTeamDirectusUsers {
  id?: number;
  page_team_id?: number | ItemsPageTeam | null;
  directus_users_id?: string | Users | null;
}

export interface ItemsPageProgramPrograms {
  id?: number;
  page_program_id?: number | ItemsPageProgram | null;
  programs_slug?: string | ItemsPrograms | null;
}

export interface ItemsPageTeamDirectusUsers1 {
  id?: number;
  page_team_id?: number | ItemsPageTeam | null;
  directus_users_id?: string | Users | null;
}

export interface ItemsPageTeamDirectusUsers2 {
  id?: number;
  page_team_id?: number | ItemsPageTeam | null;
  directus_users_id?: string | Users | null;
}

export interface ItemsPageProgramPrograms1 {
  id?: number;
  page_program_id?: number | ItemsPageProgram | null;
  programs_slug?: string | ItemsPrograms | null;
}

export interface ItemsPageProgramPrograms2 {
  id?: number;
  page_program_id?: number | ItemsPageProgram | null;
  programs_slug?: string | ItemsPrograms | null;
}

export interface ItemsPageHistoryFiles {
  id?: number;
  page_history_id?: number | ItemsPageHistory | null;
  directus_files_id?: string | Files | null;
}

export interface ItemsPageProgram {
  id?: number;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  programs_group_1_title?: string | null;
  programs_group_2_title?: string | null;
  programs_group_3_title?: string | null;
  programs_group_3?: (number | ItemsPageProgramPrograms3)[] | null;
  programs_group_1?: (number | ItemsPageProgramPrograms2)[] | null;
  programs_group_2?: (number | ItemsPageProgramPrograms1)[] | null;
}

export interface ItemsPageReceive {
  id?: number;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  content?: any;
  editor_nodes?: (string | ItemsPageReceiveNodes)[] | null;
}

export interface ItemsPartyTips {
  id?: number;
  status?: string;
  sort?: number | null;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  /** @format date-time */
  date?: string | null;
  title_2?: string | null;
  title_1?: string | null;
  party_location?: number | ItemsPartyLocation | null;
}

export interface ItemsPageHistory {
  id?: number;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  content?: any;
  vision?: string | Files | null;
  statutes?: string | Files | null;
  protocols?: (number | ItemsPageHistoryProtocol)[] | null;
  editor_nodes?: (string | ItemsPageHistoryNodes)[] | null;
  logos?: (number | ItemsPageHistoryFiles)[] | null;
}

export interface ItemsPageMember {
  id?: number;
  content?: any;
}

export interface ItemsContactAddress {
  id?: number;
  name?: string | null;
  phone_number?: string | null;
  email?: string | null;
}

export interface ItemsPageReceiveNodes {
  /** @format uuid */
  id?: string;
  page_receive_id?: number | ItemsPageReceive | null;
  item?: (string | ItemsInfoBox)[] | null;
  collection?: string | null;
}

export interface ItemsPageHistoryNodes {
  /** @format uuid */
  id?: string;
  page_history_id?: number | ItemsPageHistory | null;
  item?: (string | ItemsImageBox)[] | null;
  collection?: string | null;
}

export interface ItemsStatements {
  id?: number;
  status?: string;
  sort?: number | null;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  text?: string | null;
  author?: string | null;
}

export interface ItemsOrders {
  /** @format uuid */
  id?: string;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  status?: string | null;
  /** @format float */
  price?: number | null;
  name?: string | null;
  token?: string | null;
  first_name?: string | null;
  family_name?: string | null;
  email?: string | null;
  address?: string | null;
  plz?: string | null;
  city?: string | null;
  phone_number?: string | null;
}

export interface ItemsEvents {
  id?: number;
  status?: string;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  title?: string | null;
  /** www.rabe.ch/events/slug */
  slug?: string | null;
  content?: any;
  title_info?: string | null;
  title_image?: string | Files | null;
  color?: string | null;
  promo_title?: string | null;
  promo_text?: string | null;
  promo_button_label?: string | null;
  promo_button_url?: string | null;
  promo_status?: string | null;
  shows?: (number | ItemsEventsEventShows)[] | null;
  logos?: (number | ItemsEventsFiles)[] | null;
  editor_nodes?: (string | ItemsEventsEditorNodes)[] | null;
}

export interface ItemsEventsFiles {
  id?: number;
  events_id?: number | ItemsEvents | null;
  directus_files_id?: string | Files | null;
}

export interface ItemsIframe {
  id?: number;
  code?: string | null;
}

export interface ItemsEventsEventShows {
  id?: number;
  events_id?: number | ItemsEvents | null;
  event_shows_id?: number | ItemsEventShows | null;
}

export interface ItemsPostDirectusUsers {
  id?: number;
  post_id?: number | ItemsPost | null;
  directus_users_id?: string | Users | null;
}

export interface ItemsPostEditorNodes {
  /** @format uuid */
  id?: string;
  post_id?: number | ItemsPost | null;
  item?: (string | ItemsQuote | ItemsInfoBox)[] | null;
  collection?: string | null;
}

export interface ItemsPost {
  id?: number;
  status?: string;
  sort?: number | null;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  /** @format date-time */
  date?: string;
  title?: string;
  slug?: string;
  program?: string | ItemsPrograms;
  imagebox?: number | ItemsImageBox | null;
  content?: any;
  authors?: (number | ItemsPostDirectusUsers)[] | null;
  audio_files?: (number | ItemsPostFiles)[] | null;
  editor_nodes?: (string | ItemsPostEditorNodes)[] | null;
}

export interface ItemsEventShows {
  id?: number;
  sort?: number | null;
  user_created?: string | Users | null;
  /** @format timestamp */
  date_created?: string | null;
  user_updated?: string | Users | null;
  /** @format timestamp */
  date_updated?: string | null;
  name?: string | null;
  /** @format date */
  date?: string | null;
  /** @format time */
  opening_time?: string | null;
  /** @format time */
  starting_time?: string | null;
  program?: string | null;
  place?: string | null;
  website?: string | null;
  content?: any;
  button_label?: string | null;
  button_url?: string | null;
  imagebox?: number | ItemsImageBox | null;
}

export interface ItemsPostsFiles1 {
  id?: number;
  posts_slug?: string | ItemsPosts | null;
  directus_files_id?: string | Files | null;
  sort?: number | null;
}

export interface ItemsPostFiles {
  id?: number;
  post_id?: number | ItemsPost | null;
  directus_files_id?: string | Files | null;
  sort?: number | null;
}

export interface ItemsEventsEditorNodes {
  /** @format uuid */
  id?: string;
  events_id?: number | ItemsEvents | null;
  item?: (string | ItemsIframe)[] | null;
  collection?: string | null;
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

export interface HashGeneratePayload {
  /** String to hash. */
  string: string;
}

export interface HashGenerateData {
  /** @example "$argon2i$v=19$m=4096,t=3,p=1$pOyIa/zmRAjCVLb2f7kOyg$DasoO6LzMM+6iKfzCDq6JbsYsZWLSm33p7i9NxL9mDc" */
  data?: string;
}

export interface HashVerifyPayload {
  /** String to hash. */
  string: string;
  /** Hash you want to verify against. */
  hash: string;
}

export interface HashVerifyData {
  /** @example true */
  data?: boolean;
}

export interface SortPayload {
  /** Primary key of item to move */
  item?: number;
  /** Primary key of item where to move the current item to */
  to?: number;
}

export type SortData = any;

export interface ImportPayload {
  /** @format binary */
  file?: File;
}

export type ImportData = any;

export interface ExportPayload {
  /** What file format to save the export to. One of csv, xml, json */
  format: "csv" | "xml" | "json";
  query: Query;
  file: Files;
}

export type ExportData = any;

export type ClearCacheData = any;

export interface RandomParams {
  /** Length of the random string. */
  length?: number;
}

export interface RandomData {
  /** @example "1>M3+4oh.S" */
  data?: string;
}

export interface ReadItemsProtocolParams {
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

export interface ReadItemsProtocolData {
  data?: ItemsProtocol[];
  meta?: XMetadata;
}

export interface ReadSingleItemsProtocolParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsProtocolData {
  data?: ItemsProtocol;
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

export interface ReadItemsPageHistoryProtocolParams {
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

export interface ReadItemsPageHistoryProtocolData {
  data?: ItemsPageHistoryProtocol[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageHistoryProtocolParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageHistoryProtocolData {
  data?: ItemsPageHistoryProtocol;
}

export interface ReadItemsPageContactContactAddressParams {
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

export interface ReadItemsPageContactContactAddressData {
  data?: ItemsPageContactContactAddress[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageContactContactAddressParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageContactContactAddressData {
  data?: ItemsPageContactContactAddress;
}

export interface ReadItemsImageBoxParams {
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

export interface ReadItemsImageBoxData {
  data?: ItemsImageBox[];
  meta?: XMetadata;
}

export interface ReadSingleItemsImageBoxParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsImageBoxData {
  data?: ItemsImageBox;
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

export interface ReadItemsPageContactFilesParams {
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

export interface ReadItemsPageContactFilesData {
  data?: ItemsPageContactFiles[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageContactFilesParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageContactFilesData {
  data?: ItemsPageContactFiles;
}

export interface ReadItemsPartyLocationParams {
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

export interface ReadItemsPartyLocationData {
  data?: ItemsPartyLocation[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPartyLocationParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPartyLocationData {
  data?: ItemsPartyLocation;
}

export interface ReadItemsPageMemberStatementsParams {
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

export interface ReadItemsPageMemberStatementsData {
  data?: ItemsPageMemberStatements[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageMemberStatementsParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageMemberStatementsData {
  data?: ItemsPageMemberStatements;
}

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

export interface ReadItemsMemberProductParams {
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

export interface ReadItemsMemberProductData {
  data?: ItemsMemberProduct[];
  meta?: XMetadata;
}

export interface ReadSingleItemsMemberProductParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsMemberProductData {
  data?: ItemsMemberProduct;
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

export interface ReadItemsPageContactParams {
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

export interface ReadItemsPageContactData {
  data?: ItemsPageContact[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageContactParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageContactData {
  data?: ItemsPageContact;
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

export interface ReadItemsPageAgbParams {
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

export interface ReadItemsPageAgbData {
  data?: ItemsPageAgb[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageAgbParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageAgbData {
  data?: ItemsPageAgb;
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

export interface ReadItemsPageTeamParams {
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

export interface ReadItemsPageTeamData {
  data?: ItemsPageTeam[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageTeamParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageTeamData {
  data?: ItemsPageTeam;
}

export interface ReadItemsPageProgramPrograms3Params {
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

export interface ReadItemsPageProgramPrograms3Data {
  data?: ItemsPageProgramPrograms3[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageProgramPrograms3Params {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageProgramPrograms3Data {
  data?: ItemsPageProgramPrograms3;
}

export interface ReadItemsPageTeamDirectusUsersParams {
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

export interface ReadItemsPageTeamDirectusUsersData {
  data?: ItemsPageTeamDirectusUsers[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageTeamDirectusUsersParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageTeamDirectusUsersData {
  data?: ItemsPageTeamDirectusUsers;
}

export interface ReadItemsPageProgramProgramsParams {
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

export interface ReadItemsPageProgramProgramsData {
  data?: ItemsPageProgramPrograms[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageProgramProgramsParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageProgramProgramsData {
  data?: ItemsPageProgramPrograms;
}

export interface ReadItemsPageTeamDirectusUsers1Params {
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

export interface ReadItemsPageTeamDirectusUsers1Data {
  data?: ItemsPageTeamDirectusUsers1[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageTeamDirectusUsers1Params {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageTeamDirectusUsers1Data {
  data?: ItemsPageTeamDirectusUsers1;
}

export interface ReadItemsPageTeamDirectusUsers2Params {
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

export interface ReadItemsPageTeamDirectusUsers2Data {
  data?: ItemsPageTeamDirectusUsers2[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageTeamDirectusUsers2Params {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageTeamDirectusUsers2Data {
  data?: ItemsPageTeamDirectusUsers2;
}

export interface ReadItemsPageProgramPrograms1Params {
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

export interface ReadItemsPageProgramPrograms1Data {
  data?: ItemsPageProgramPrograms1[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageProgramPrograms1Params {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageProgramPrograms1Data {
  data?: ItemsPageProgramPrograms1;
}

export interface ReadItemsPageProgramPrograms2Params {
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

export interface ReadItemsPageProgramPrograms2Data {
  data?: ItemsPageProgramPrograms2[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageProgramPrograms2Params {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageProgramPrograms2Data {
  data?: ItemsPageProgramPrograms2;
}

export interface ReadItemsPageHistoryFilesParams {
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

export interface ReadItemsPageHistoryFilesData {
  data?: ItemsPageHistoryFiles[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageHistoryFilesParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageHistoryFilesData {
  data?: ItemsPageHistoryFiles;
}

export interface ReadItemsPageProgramParams {
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

export interface ReadItemsPageProgramData {
  data?: ItemsPageProgram[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageProgramParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageProgramData {
  data?: ItemsPageProgram;
}

export interface ReadItemsPageReceiveParams {
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

export interface ReadItemsPageReceiveData {
  data?: ItemsPageReceive[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageReceiveParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageReceiveData {
  data?: ItemsPageReceive;
}

export interface ReadItemsPartyTipsParams {
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

export interface ReadItemsPartyTipsData {
  data?: ItemsPartyTips[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPartyTipsParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPartyTipsData {
  data?: ItemsPartyTips;
}

export interface ReadItemsPageHistoryParams {
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

export interface ReadItemsPageHistoryData {
  data?: ItemsPageHistory[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageHistoryParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageHistoryData {
  data?: ItemsPageHistory;
}

export interface ReadItemsPageMemberParams {
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

export interface ReadItemsPageMemberData {
  data?: ItemsPageMember[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageMemberParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageMemberData {
  data?: ItemsPageMember;
}

export interface ReadItemsContactAddressParams {
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

export interface ReadItemsContactAddressData {
  data?: ItemsContactAddress[];
  meta?: XMetadata;
}

export interface ReadSingleItemsContactAddressParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsContactAddressData {
  data?: ItemsContactAddress;
}

export interface ReadItemsPageReceiveNodesParams {
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

export interface ReadItemsPageReceiveNodesData {
  data?: ItemsPageReceiveNodes[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageReceiveNodesParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageReceiveNodesData {
  data?: ItemsPageReceiveNodes;
}

export interface ReadItemsPageHistoryNodesParams {
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

export interface ReadItemsPageHistoryNodesData {
  data?: ItemsPageHistoryNodes[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPageHistoryNodesParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPageHistoryNodesData {
  data?: ItemsPageHistoryNodes;
}

export interface ReadItemsStatementsParams {
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

export interface ReadItemsStatementsData {
  data?: ItemsStatements[];
  meta?: XMetadata;
}

export interface ReadSingleItemsStatementsParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsStatementsData {
  data?: ItemsStatements;
}

export interface ReadItemsOrdersParams {
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

export interface ReadItemsOrdersData {
  data?: ItemsOrders[];
  meta?: XMetadata;
}

export type UpdateItemsOrdersPayload = ItemsOrders[] | ItemsOrders;

export interface UpdateItemsOrdersParams {
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

export interface UpdateItemsOrdersData {
  data?: ItemsOrders[];
}

export interface ReadSingleItemsOrdersParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsOrdersData {
  data?: ItemsOrders;
}

export interface UpdateSingleItemsOrdersParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Index of the item. */
  id: number | string;
}

export interface UpdateSingleItemsOrdersData {
  data?: ItemsOrders;
}

export interface ReadItemsEventsParams {
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

export interface ReadItemsEventsData {
  data?: ItemsEvents[];
  meta?: XMetadata;
}

export interface ReadSingleItemsEventsParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsEventsData {
  data?: ItemsEvents;
}

export interface ReadItemsEventsFilesParams {
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

export interface ReadItemsEventsFilesData {
  data?: ItemsEventsFiles[];
  meta?: XMetadata;
}

export interface ReadSingleItemsEventsFilesParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsEventsFilesData {
  data?: ItemsEventsFiles;
}

export interface ReadItemsIframeParams {
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

export interface ReadItemsIframeData {
  data?: ItemsIframe[];
  meta?: XMetadata;
}

export interface ReadSingleItemsIframeParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsIframeData {
  data?: ItemsIframe;
}

export interface ReadItemsEventsEventShowsParams {
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

export interface ReadItemsEventsEventShowsData {
  data?: ItemsEventsEventShows[];
  meta?: XMetadata;
}

export interface ReadSingleItemsEventsEventShowsParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsEventsEventShowsData {
  data?: ItemsEventsEventShows;
}

export interface ReadItemsPostDirectusUsersParams {
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

export interface ReadItemsPostDirectusUsersData {
  data?: ItemsPostDirectusUsers[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPostDirectusUsersParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPostDirectusUsersData {
  data?: ItemsPostDirectusUsers;
}

export interface ReadItemsPostEditorNodesParams {
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

export interface ReadItemsPostEditorNodesData {
  data?: ItemsPostEditorNodes[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPostEditorNodesParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPostEditorNodesData {
  data?: ItemsPostEditorNodes;
}

export interface ReadItemsPostParams {
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

export interface ReadItemsPostData {
  data?: ItemsPost[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPostParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPostData {
  data?: ItemsPost;
}

export interface ReadItemsEventShowsParams {
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

export interface ReadItemsEventShowsData {
  data?: ItemsEventShows[];
  meta?: XMetadata;
}

export interface ReadSingleItemsEventShowsParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsEventShowsData {
  data?: ItemsEventShows;
}

export interface ReadItemsPostsFiles1Params {
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

export interface ReadItemsPostsFiles1Data {
  data?: ItemsPostsFiles1[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPostsFiles1Params {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPostsFiles1Data {
  data?: ItemsPostsFiles1;
}

export interface ReadItemsPostFilesParams {
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

export interface ReadItemsPostFilesData {
  data?: ItemsPostFiles[];
  meta?: XMetadata;
}

export interface ReadSingleItemsPostFilesParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsPostFilesData {
  data?: ItemsPostFiles;
}

export interface ReadItemsEventsEditorNodesParams {
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

export interface ReadItemsEventsEditorNodesData {
  data?: ItemsEventsEditorNodes[];
  meta?: XMetadata;
}

export interface ReadSingleItemsEventsEditorNodesParams {
  /** Control what fields are being returned in the object. */
  fields?: string[];
  /** What metadata to return in the response. */
  meta?: string;
  /** Retrieve an item's state from a specific Content Version. The value corresponds to the "key" of the Content Version. */
  version?: string;
  /** Index of the item. */
  id: number | string;
}

export interface ReadSingleItemsEventsEditorNodesData {
  data?: ItemsEventsEditorNodes;
}
