// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';
import { path as __scalarPath } from '../internal/utils/path';

export class Events extends APIResource {
  /**
   * Return a list of all events this site owns. Events are sorted by `created_at` ascending to allow you to paginate with ease.
   *
   * **Permissions:** Requires read access to the site (`all-sites-readonly`, `read:{site_id}` or `manage:{site_id}`).
   *
   * **Returns:** A list of event objects.
   *
   * > **The id field is going away:** Each event still returns an `id` (the old goal code). We are removing that field on 24 September 2026. Identify events by `name` instead.
   *
   * > The `currency` field is returned as `null` on list responses. Set it with [Set event currency](#set-event-currency).
   *
   * @param {string} siteID - The ID of the site. This is the same string you use in your tracking code.
   * @param {EventListParams} [query] - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.events.list('CDBUGS', {
   *   limit: 10,
   * });
   * ```
   */
  list(
    siteID: string,
    query: EventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get(__scalarPath`/sites/${siteID}/events`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete an event by its name. If more than one event row shares the name, they are treated as one event and every matching row is deleted.
   *
   * **Permissions:** Requires write access to the site (`manage:{site_id}`).
   *
   * **Returns:** Returns a deleted object on success. Otherwise, this call returns an error.
   *
   * @param {string} siteID - The ID of the site. This is the same string you use in your tracking code.
   * @param {EventDeleteByNameParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.events.deleteByName('CDBUGS', {
   *   name: 'Purchase early access',
   * });
   * ```
   */
  deleteByName(siteID: string, params: EventDeleteByNameParams, options?: RequestOptions): APIPromise<void> {
    const { name } = params;
    return this._client.delete(__scalarPath`/sites/${siteID}/events`, {
      query: { name },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Previously created an event. This endpoint is no longer available.
   *
   * **Permissions:** Requires write access to the site (`manage:{site_id}`).
   *
   * @param {string} siteID - The ID of the site. This is the same string you use in your tracking code.
   * @param {EventCreateParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns This endpoint is no longer available. Track the event on your site, then use [List events](#list-events) and [Set event currency](#set-event-currency).
   *
   * @example
   * ```ts
   * await client.events.create('CDBUGS', {
   *   name: 'Purchase early access',
   *   currency: 'dollar',
   * });
   * ```
   *
   * @deprecated
   */
  create(siteID: string, body: EventCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(__scalarPath`/sites/${siteID}/events`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Set the currency of an event by its name. Use this instead of updating an event by its goal code. If more than one event row shares the name, they are treated as one event and every matching row is updated.
   *
   * **Permissions:** Requires write access to the site (`manage:{site_id}`).
   *
   * **Returns:** Returns an updated object on success. Otherwise, this call returns an error.
   *
   * @param {string} siteID - The ID of the site. This is the same string you use in your tracking code.
   * @param {EventSetCurrencyParams} body - The request body to send.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.events.setCurrency('CDBUGS', {
   *   name: 'Purchase early access',
   *   currency: 'pound',
   * });
   * ```
   */
  setCurrency(siteID: string, body: EventSetCurrencyParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(__scalarPath`/sites/${siteID}/events/currency`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Previously returned a single event by its goal code. This endpoint is no longer available.
   *
   * **Permissions:** Requires read access to the site (`all-sites-readonly`, `read:{site_id}` or `manage:{site_id}`).
   *
   * @param {string} eventID - The `id` (tracking code) of the event, as returned when the event was created.
   * @param {EventRetrieveParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns This endpoint is no longer available. Use [List events](#list-events).
   *
   * @example
   * ```ts
   * await client.events.retrieve('ABCDEFGH', {
   *   site_id: 'CDBUGS',
   * });
   * ```
   *
   * @deprecated
   */
  retrieve(eventID: string, params: EventRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { site_id } = params;
    return this._client.get(__scalarPath`/sites/${site_id}/events/${eventID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Previously updated an event by its goal code. This endpoint is no longer available.
   *
   * **Permissions:** Requires write access to the site (`manage:{site_id}`).
   *
   * @param {string} eventID - The `id` (tracking code) of the event you wish to update.
   * @param {EventUpdateParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns This endpoint is no longer available. To change an event's currency, use [Set event currency](#set-event-currency).
   *
   * @example
   * ```ts
   * await client.events.update('ABCDEFGH', {
   *   site_id: 'CDBUGS',
   * });
   * ```
   *
   * @deprecated
   */
  update(eventID: string, params: EventUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { site_id, ...body } = params;
    return this._client.post(__scalarPath`/sites/${site_id}/events/${eventID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Previously deleted an event by its goal code. This endpoint is no longer available.
   *
   * **Permissions:** Requires write access to the site (`manage:{site_id}`).
   *
   * @param {string} eventID - The `id` (tracking code) of the event you wish to delete.
   * @param {EventDeleteParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns This endpoint is no longer available. To delete an event, use [Delete event](#delete-event-by-name) with the event name.
   *
   * @example
   * ```ts
   * await client.events.delete('ABCDEFGH', {
   *   site_id: 'CDBUGS',
   * });
   * ```
   *
   * @deprecated
   */
  delete(eventID: string, params: EventDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { site_id } = params;
    return this._client.delete(__scalarPath`/sites/${site_id}/events/${eventID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Previously wiped all completion data belonging to an event. This endpoint is no longer available.
   *
   * @param {string} eventID - The `id` (tracking code) of the event.
   * @param {EventWipeParams} params - The parameters to send with the request.
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns This endpoint has been retired and now returns `410 Gone`. It is no longer possible to wipe an event's completion data via the API.
   *
   * @example
   * ```ts
   * await client.events.wipe('ABCDEFGH', {
   *   site_id: 'CDBUGS',
   * });
   * ```
   *
   * @deprecated
   */
  wipe(eventID: string, params: EventWipeParams, options?: RequestOptions): APIPromise<void> {
    const { site_id } = params;
    return this._client.delete(__scalarPath`/sites/${site_id}/events/${eventID}/data`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface EventListParams {
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

export interface EventDeleteByNameParams {
  /**
   * The name of the event you wish to delete.
   * Example: `Purchase early access`
   */
  name: string;
}

export interface EventCreateParams {
  /**
   * The name of the event (up to 255 characters).
   * Example: `Purchase early access`
   */
  name: string;
  /**
   * The currency used for any value attached to this event's completions. If omitted, defaults to `dollar`.
   */
  currency?:
    | 'dollar'
    | 'pound'
    | 'euro'
    | 'yuan'
    | 'peso'
    | 'shekel'
    | 'yen'
    | 'won'
    | 'hryvnia'
    | 'franc'
    | 'rupee'
    | 'integer'
    | 'none';
}

export interface EventSetCurrencyParams {
  /**
   * The name of the event (up to 255 characters).
   * Example: `Purchase early access`
   */
  name: string;
  /**
   * The currency used for any value attached to this event's completions.
   */
  currency:
    | 'dollar'
    | 'pound'
    | 'euro'
    | 'yuan'
    | 'peso'
    | 'shekel'
    | 'yen'
    | 'won'
    | 'hryvnia'
    | 'franc'
    | 'rupee'
    | 'integer'
    | 'none';
}

export interface EventRetrieveParams {
  /**
   * The ID of the site. This is the same string you use in your tracking code.
   * Example: `CDBUGS`
   */
  site_id: string;
}

export interface EventUpdateParams {
  /**
   * Path param: The ID of the site. This is the same string you use in your tracking code.
   * Example: `CDBUGS`
   */
  site_id: string;
  /**
   * Body param: The name of the event (up to 255 characters).
   */
  name?: string;
  /**
   * Body param: The currency used for any value attached to this event's completions.
   */
  currency?:
    | 'dollar'
    | 'pound'
    | 'euro'
    | 'yuan'
    | 'peso'
    | 'shekel'
    | 'yen'
    | 'won'
    | 'hryvnia'
    | 'franc'
    | 'rupee'
    | 'integer'
    | 'none';
}

export interface EventDeleteParams {
  /**
   * The ID of the site. This is the same string you use in your tracking code.
   * Example: `CDBUGS`
   */
  site_id: string;
}

export interface EventWipeParams {
  /**
   * The ID of the site. This is the same string you use in your tracking code.
   * Example: `CDBUGS`
   */
  site_id: string;
}
export declare namespace Events {
  export {
    type EventListParams as EventListParams,
    type EventDeleteByNameParams as EventDeleteByNameParams,
    type EventCreateParams as EventCreateParams,
    type EventSetCurrencyParams as EventSetCurrencyParams,
    type EventRetrieveParams as EventRetrieveParams,
    type EventUpdateParams as EventUpdateParams,
    type EventDeleteParams as EventDeleteParams,
    type EventWipeParams as EventWipeParams,
  };
}
