// File generated from our OpenAPI spec by Scalar. See README.md for details.

import type { FathomAnalyticsAPI } from './client';

export abstract class APIResource {
  protected _client: FathomAnalyticsAPI;

  constructor(client: FathomAnalyticsAPI) {
    this._client = client;
  }
}
