// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class Sites extends APIResource {
  /**
   * Return a list of all sites this API key owns. Sites are sorted by `created_at` ascending to allow you to paginate with ease.
   *
   * **Permissions:** Requires read access to all sites (`all-sites-readonly`) or full account access.
   *
   * **Returns:** A list of site objects.
   *
   * @param {SiteListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.sites.list({
   *   limit: 10,
   * });
   * ```
   */
  list(query: SiteListParams | null | undefined = {}, options?: RequestOptions): APIPromise<void> {
    return this._client.get('/sites', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a site.
   *
   * **Permissions:** Requires full account access (`*`).
   *
   * **Returns:** A site object.
   *
   * @param {SiteCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.sites.create({
   *   name: 'Bugs Bunny Portfolio',
   *   sharing: 'none',
   *   multi_domain: false,
   * });
   * ```
   */
  create(body: SiteCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/sites', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a single site.
   *
   * **Permissions:** Requires read access to the site (`all-sites-readonly`, `read:{site_id}` or `manage:{site_id}`).
   *
   * **Returns:** A site object.
   *
   * @param {string} siteID - The ID of the site. This is the same string you use in your tracking code.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.sites.retrieve('CDBUGS');
   * ```
   */
  retrieve(siteID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(__scalarPath`/sites/${siteID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a site. Send only the fields you want to change.
   *
   * **Permissions:** Requires write access to the site (`manage:{site_id}`).
   *
   * **Returns:** A site object.
   *
   * @param {string} siteID - The ID of the site. This is the same string you use in your tracking code.
   * @param {SiteUpdateParams} [body] - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.sites.update('CDBUGS');
   * ```
   */
  update(
    siteID: string,
    body: SiteUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(__scalarPath`/sites/${siteID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a site. Careful: you can't undo this, and neither can we.
   *
   * **Permissions:** Requires full account access (`*`).
   *
   * **Returns:** Returns a deleted object on success. Otherwise, this call returns an error.
   *
   * @param {string} siteID - The ID of the site. This is the same string you use in your tracking code.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.sites.delete('CDBUGS');
   * ```
   */
  delete(siteID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/sites/${siteID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Previously wiped all pageviews and event completions from a website. This endpoint is no longer available.
   *
   * @param {string} siteID - The ID of the site. This is the same string you use in your tracking code.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns This endpoint has been retired and now returns `410 Gone`. It is no longer possible to wipe a site's data via the API.
   *
   * @example
   * ```ts
   * await client.sites.wipe('CDBUGS');
   * ```
   *
   * @deprecated
   */
  wipe(siteID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(__scalarPath`/sites/${siteID}/data`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SiteListParams {
  /**
   * A limit on the number of objects to be returned, between 1 and 100.
   * @default 10
   */
  limit?: number;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For example, if you make a list request and receive 10 objects ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` to fetch the next page.
   */
  starting_after?: string;
  /**
   * A cursor for use in pagination, working in the opposite direction to `starting_after`. `ending_before` is an object ID that defines your place in the list.
   */
  ending_before?: string;
}

export interface SiteCreateParams {
  /**
   * The name of the website. Any string (up to 255 characters) is acceptable, and it doesn't have to match the website URL.
   * Example: `Daffy's Website`
   */
  name: string;
  /**
   * The sharing configuration. Supported values are `none`, `private` or `public`.
   * @default none
   */
  sharing?: 'none' | 'private' | 'public';
  /**
   * When sharing is set to `private`, you must also send a password to access the site with (up to 255 characters).
   *
   * **Required if sharing is private.**
   */
  share_password?: string;
  /**
   * The site's reporting timezone as a [TZ database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (e.g. `America/New_York`). If omitted, the site inherits your account's default timezone.
   */
  timezone?: string;
  /**
   * Set to `true` to allow this site to track multiple domains.
   * @default false
   */
  multi_domain?: boolean;
  /**
   * How multi-domain data is grouped. Supported values are `combined` (report all domains together) or `separate` (report each domain individually).
   *
   * **Required if multi_domain is true.**
   */
  multi_domain_option?: 'combined' | 'separate';
}

export interface SiteUpdateParams {
  /**
   * The name of the website (up to 255 characters).
   */
  name?: string;
  /**
   * The sharing configuration. Supported values are `none`, `private` or `public`.
   */
  sharing?: 'none' | 'private' | 'public';
  /**
   * When sharing is set to `private`, you must also send a password to access the site with (up to 255 characters).
   *
   * **Required if sharing is private.**
   */
  share_password?: string;
  /**
   * The site's reporting timezone as a [TZ database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (e.g. `America/New_York`). Reporting for this site will use this timezone.
   */
  timezone?: string;
  /**
   * Set to `true` to allow this site to track multiple domains.
   */
  multi_domain?: boolean;
  /**
   * How multi-domain data is grouped: `combined` or `separate`.
   *
   * **Required if multi_domain is true.**
   */
  multi_domain_option?: 'combined' | 'separate';
}
export declare namespace Sites {
  export {
    type SiteListParams as SiteListParams,
    type SiteCreateParams as SiteCreateParams,
    type SiteUpdateParams as SiteUpdateParams,
  };
}
