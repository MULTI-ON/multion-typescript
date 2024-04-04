# MultiOn Node Library

[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://buildwithfern.com/)
[![npm shield](https://img.shields.io/npm/v/multion)](https://www.npmjs.com/package/multion)

The MultiOn Node.js library provides convenient access to the MultiOn API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://multion.docs.buildwithfern.com/);

## Reference

A full reference of the SDK is available [here](./reference.md).

## Installation

```bash
npm install --save multion
# or
yarn add multion
```

In Deno (1.25+) you can import by doing: 

```ts
import { MultiOnClient } from "npm:multion";
```

## Usage

```typescript
import { MultiOnClient, MultiOn } from 'multion';

const multion = new MultiOnClient({
  apiKey: "...", // Defaults to process.env.MULTION_API_KEY
});

const response = await multion.browse({
  url: "https://www.google.com"
})
```

## Request and Response Types

The SDK exports all request and response types as TypeScript interfaces. Simply 
import them under the `MultiOn` namespace: 

```ts
import { MultiOn } from "multion"; 

const message: MultiOn.Message = {
  url: "https://www.google.com",
  includeScreenshot: true,
}
```

## Exception Handling

When the API returns a non-success status code (4xx or 5xx response), 
a subclass of [MultiOnError](./src/errors/MultiOnError.ts) will be thrown:

```ts
import { MultiOnError } from 'multion';

try {
  await multion.browse(...);
} catch (err) {
  if (err instanceof MultiOnError) {
    console.log(err.statusCode); 
    console.log(err.message);
    console.log(err.body); 
  }
}
```

## Retries

The MultiOn Node SDK is instrumented with automatic retries with exponential backoff. A request will be
retried as long as the request is deemed retriable and the number of retry attempts has not grown larger
than the configured retry limit (default: 2).

A request is deemed retriable when any of the following HTTP status codes is returned:

- [408](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408) (Timeout)
- [429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429) (Too Many Requests)
- [5XX](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500) (Internal Server Errors)
  
Use the `maxRetries` request option to configure this behavior. 

```ts
const response = multion.browse({ url: "https://google.com" }, {
  maxRetries: 0 // override maxRetries at the request level
});
```

## Timeouts

The SDK defaults to a 60 second timout. Use the `timeoutInSeconds` option to 
configure this behavior. 

```ts
const response = multion.browse({ url: "https://google.com" }, {
  timeoutInSeconds: 30 // override timeout to 30s
});
```

## Runtime compatiblity

The SDK defaults to `node-fetch` but will use the global fetch client if present. The SDK 
works in the following runtimes: 

The following runtimes are supported:

- Node.js 18+ 
- Vercel 
- Cloudflare Workers
- Deno v1.25+
- Bun 1.0+

### Customizing Fetch client

The SDK provides a way for you to customize the underlying HTTP client / Fetch function. If you're 
running in an unsupported environment, this provides a way for you to break the glass and 
ensure the SDK works. 

```ts
import { MultiOnClient } from 'multion';

const multion = new MultiOnClient({
  apiKey: "...",
  fetcher: // provide your implementation here
});
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. 
Therefore, we recommend pinning the package version to a specific version in your package.json file. 
This way, you can install the same version each time without breaking changes unless you are 
intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. 
Additions made directly to this library would have to be moved over to our generation code, 
otherwise they would be overwritten upon the next generated release. Feel free to open a 
PR as a proof of concept, but know that we will not be able to merge it as-is. 

We suggest [opening an issue](https://github.com/FlatFilers/flatfile-node/issues) first to discuss with us!
