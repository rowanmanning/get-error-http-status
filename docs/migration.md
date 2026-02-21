
# Migration Guide

This document outlines how to migrate to new major breaking versions of this library. We cover each major version in a separate section.

* [Migrating from v4 to v5](#migrating-from-v4-to-v5)
  * [Dropped Node.js v20 support](#dropped-nodejs-v20-support)
* [Migrating from v3 to v4](#migrating-from-v3-to-v4)
  * [Dropped Node.js v18 support](#dropped-nodejs-v18-support)
  * [Switch to named exports](#switch-to-named-exports)
  * [Stricter number parsing](#stricter-number-parsing)
* [Migrating from v2 to v3](#migrating-from-v2-to-v3)
  * [Dropped Node.js v16 support](#dropped-nodejs-v16-support)
* [Migrating from v1 to v2](#migrating-from-v1-to-v2)
  * [Dropped Node.js v14 support](#dropped-nodejs-v14-support)

## Migrating from v4 to v5

### Dropped Node.js v20 support

The library now only supports Node.js v22 and above.

## Migrating from v3 to v4

### Dropped Node.js v18 support

The library now only supports Node.js v20 and above.

### Switch to named exports

We've moved away from using a default export for the `getErrorHttpStatus` function. It's now a named export. You'll need to update your imports:

```diff
- const getErrorHttpStatus = require('@rowanmanning/get-error-http-status');
+ const { getErrorHttpStatus } = require('@rowanmanning/get-error-http-status');
```

or

```diff
- import getErrorHttpStatus from '@rowanmanning/get-error-http-status';
+ import { getErrorHttpStatus } from '@rowanmanning/get-error-http-status';
```

### Stricter number parsing

We switched from using `parseInt` to `Number` which means that some strings are no longer found to be valid status codes, meaning a default is used. For example in v3 the following would result in a status code of `404` being returned:

```
const error = new Error('Not found');
error.status = '404hello'
getErrorHttpStatus(error);
```

Now the above will return `500` because the status property is not a valid error status code.

## Migrating from v2 to v3

### Dropped Node.js v16 support

The library now only supports Node.js v18 and above.

## Migrating from v1 to v2

### Dropped Node.js v14 support

The library now only supports Node.js v16 and above.
