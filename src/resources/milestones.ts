// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class Milestones extends APIResource {
  /**
   * Return a list of all milestones this site owns. Milestones are sorted by `created_at` ascending to allow you to paginate with ease.
   *
   * **Permissions:** Requires read access to the site (`all-sites-readonly`, `read:{site_id}` or `manage:{site_id}`).
   *
   * **Returns:** A list of milestone objects.
   *
   * @param {string} siteID - The ID of the site. This is the same string you use in your tracking code.
   * @param {MilestoneListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.milestones.list('CDBUGS', {
   *   limit: 10,
   * });
   * ```
   */
  list(
    siteID: string,
    query: MilestoneListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(__scalarPath`/sites/${siteID}/milestones`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Create a milestone. Returns HTTP `201 Created` on success.
   *
   * **Permissions:** Requires write access to the site (`manage:{site_id}`).
   *
   * **Returns:** A milestone object.
   *
   * @param {string} siteID - The ID of the site. This is the same string you use in your tracking code.
   * @param {MilestoneCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.milestones.create('CDBUGS', {
   *   name: 'Website Redesign Launch',
   *   milestone_date: '2024-01-15',
   * });
   * ```
   */
  create(siteID: string, body: MilestoneCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(__scalarPath`/sites/${siteID}/milestones`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Return a single milestone.
   *
   * **Permissions:** Requires read access to the site (`all-sites-readonly`, `read:{site_id}` or `manage:{site_id}`).
   *
   * **Returns:** A milestone object.
   *
   * @param {string} milestoneID - The `id` (UUID) of the milestone you wish to retrieve.
   * @param {MilestoneRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.milestones.retrieve('ddc9cdff-ab83-41fa-96c6-dfb276a862e7', {
   *   site_id: 'CDBUGS',
   * });
   * ```
   */
  retrieve(milestoneID: string, params: MilestoneRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { site_id } = params;
    return this._client.get(__scalarPath`/sites/${site_id}/milestones/${milestoneID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update a milestone. Both `name` and `milestone_date` are required.
   *
   * **Permissions:** Requires write access to the site (`manage:{site_id}`).
   *
   * **Returns:** A milestone object.
   *
   * @param {string} milestoneID - The `id` (UUID) of the milestone you wish to update.
   * @param {MilestoneUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.milestones.update('ddc9cdff-ab83-41fa-96c6-dfb276a862e7', {
   *   site_id: 'CDBUGS',
   *   name: 'Website Redesign Launch v2',
   *   milestone_date: '2024-01-20',
   * });
   * ```
   */
  update(milestoneID: string, params: MilestoneUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { site_id, ...body } = params;
    return this._client.post(__scalarPath`/sites/${site_id}/milestones/${milestoneID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete a milestone. Careful: you can't undo this, and neither can we.
   *
   * **Permissions:** Requires write access to the site (`manage:{site_id}`).
   *
   * **Returns:** Returns a deleted object on success. Otherwise, this call returns an error.
   *
   * @param {string} milestoneID - The `id` (UUID) of the milestone you wish to delete.
   * @param {MilestoneDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.milestones.delete('ddc9cdff-ab83-41fa-96c6-dfb276a862e7', {
   *   site_id: 'CDBUGS',
   * });
   * ```
   */
  delete(milestoneID: string, params: MilestoneDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { site_id } = params;
    return this._client.delete(__scalarPath`/sites/${site_id}/milestones/${milestoneID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MilestoneListParams {
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

export interface MilestoneCreateParams {
  /**
   * The name of the milestone (up to 30 characters).
   */
  name: string;
  /**
   * The date of the milestone in `YYYY-MM-DD` format.
   */
  milestone_date: string;
}

export interface MilestoneRetrieveParams {
  /**
   * The ID of the site. This is the same string you use in your tracking code.
   * Example: `CDBUGS`
   */
  site_id: string;
}

export interface MilestoneUpdateParams {
  /**
   * Path param: The ID of the site. This is the same string you use in your tracking code.
   * Example: `CDBUGS`
   */
  site_id: string;
  /**
   * Body param: The name of the milestone (up to 30 characters).
   */
  name: string;
  /**
   * Body param: The date of the milestone in `YYYY-MM-DD` format.
   */
  milestone_date: string;
}

export interface MilestoneDeleteParams {
  /**
   * The ID of the site. This is the same string you use in your tracking code.
   * Example: `CDBUGS`
   */
  site_id: string;
}
export declare namespace Milestones {
  export {
    type MilestoneListParams as MilestoneListParams,
    type MilestoneCreateParams as MilestoneCreateParams,
    type MilestoneRetrieveParams as MilestoneRetrieveParams,
    type MilestoneUpdateParams as MilestoneUpdateParams,
    type MilestoneDeleteParams as MilestoneDeleteParams,
  };
}
