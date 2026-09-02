// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import { buildHeaders } from '../internal/headers';

export class Account extends APIResource {
  /**
   * Retrieve information about the account that owns the API key.
   *
   * **Permissions:** Requires a token with full account access (the `*` scope).
   *
   * **Returns:** An account object.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.account.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/account', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve metadata about the API token used to make the request, including its name, permissions (abilities), token-format version and timestamps. Your secret token value is never returned.
   *
   * **Permissions:** Any valid API token.
   *
   * **Returns:** A token object.
   *
   * @param {RequestOptions} [options] - Options to apply to the request, such as headers and an abort signal.
   * @returns Successful response
   *
   * @example
   * ```ts
   * await client.account.listToken();
   * ```
   */
  listToken(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/token', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
