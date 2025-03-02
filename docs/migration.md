
# Migration Guide

This document outlines how to migrate to new major breaking versions of this library. We cover each major version in a separate section.

* [Migrating from v3 to v4](#migrating-from-v3-to-v4)
  * [Switch to named exports](#switch-to-named-exports)
* [Migrating from v2 to v3](#migrating-from-v2-to-v3)
  * [Dropped Node.js v16 support](#dropped-nodejs-v16-support)
* [Migrating from v1 to v2](#migrating-from-v1-to-v2)
  * [Dropped Node.js v14 support](#dropped-nodejs-v14-support)

## Migrating from v3 to v4

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

## Migrating from v2 to v3

### Dropped Node.js v16 support

The library now only supports Node.js v18 and above.

## Migrating from v1 to v2

### Dropped Node.js v14 support

The library now only supports Node.js v16 and above.
