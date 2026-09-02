// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { fathom } from './client';

export abstract class APIResource {
  protected _client: fathom;

  constructor(client: fathom) {
    this._client = client;
  }
}
