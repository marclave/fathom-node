---
name: fathom-analytics-api-typescript-sdk
description: "TypeScript SDK for Fathom Analytics API. Use when writing TypeScript code that calls Fathom Analytics API with the @fathom/fathom-analytics package: installing it, constructing and authenticating the client, and calling API operations."
---

# Fathom Analytics API TypeScript SDK

Generated TypeScript client for Fathom Analytics API, published as `@fathom/fathom-analytics`. Use the generated client instead of hand-writing HTTP requests.

## Install

```sh
npm install @fathom/fathom-analytics
```

## Client setup and authentication

```ts
import FathomAnalyticsAPI from '@fathom/fathom-analytics';

const client = new FathomAnalyticsAPI({
  bearerAuth: process.env['BEARER_AUTH'], // defaults to the BEARER_AUTH env var
});
```

Provide credentials using the options below. Environment variables are read automatically when the target runtime supports them:

- `bearerAuth` (env: `BEARER_AUTH`) — Authenticate with a personal API token created at https://app.usefathom.com/api, sent as `Authorization: Bearer <token>`.

## Calling operations

```ts
import FathomAnalyticsAPI from '@fathom/fathom-analytics';

const client = new FathomAnalyticsAPI({
  bearerAuth: process.env['BEARER_AUTH'], // defaults to the BEARER_AUTH env var
});

await client.account.list();
```

Method names, parameter shapes, and response types are generated from the API description — do not guess them. Look up the exact call signature in [api.md](./api.md) before writing a call.

## Error handling

Non-success responses throw generated API errors. Error objects expose status, headers, response body, and request metadata where the target runtime supports it.

```ts
import { APIError } from '@fathom/fathom-analytics';

try {
  await client.account.list();
} catch (err) {
  if (err instanceof APIError) {
    console.log(err.status, err.name, err.headers);
  }
  throw err;
}
```

## Requirements

- Node.js 20+, a modern browser, or any runtime with `fetch` support

## Reference files

- [README.md](./README.md) — full feature tour: client options, request options, retries and timeouts, logging.
- [api.md](./api.md) — complete catalogue of every operation with request and response types.
