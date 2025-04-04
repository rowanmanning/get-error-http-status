
# @rowanmanning/get-error-http-status

Get the HTTP status code for an error object.

* [Requirements](#requirements)
* [Usage](#usage)
  * [`getErrorHttpStatus`](#geterrorhttpstatus)
  * [`isErrorHttpStatus`](#iserrorhttpstatus)
* [Migration](#migration)
* [Contributing](#contributing)
* [License](#license)


## Requirements

This library requires the following to run:

  * [Node.js](https://nodejs.org/) 20+


## Usage

Install with [npm](https://www.npmjs.com/):

```sh
npm install @rowanmanning/get-error-http-status
```

Load the library into your code with a `require` call:

```js
const { getErrorHttpStatus } = require('@rowanmanning/get-error-http-status');
```

### `getErrorHttpStatus`

Call the method with an error object to get the status code:

```js
const notFoundError = new Error('Not Found');
notFoundError.status = 404;

const status = getErrorHttpStatus(error); // 404
```

If there is no `status` property present on the error, then we fall back to the `statusCode` property:

```js
const notFoundError = new Error('Not Found');
notFoundError.statusCode = 404;

const status = getErrorHttpStatus(error); // 404
```

If the `status` or `statusCode` property is a string, it will be parsed as an number before continuing.

In any of the following scenarios, the function will return a default status code of `500`:

  * The error is not an error object or a plain JavaScript object
  * The error status property is less than `400` or greater than `599`
  * The error status property is a decimal
  * The error status property is a non-numeric string

### `isErrorHttpStatus`

This library exposes a second method named `isErrorHttpStatus`. You can use this to determine whether a given value is a valid error HTTP status (integer, `400` to `599`):

```js
const { isErrorHttpStatus } = require('@rowanmanning/get-error-http-status');

isErrorHttpStatus(500); // true
isErrorHttpStatus(200); // false
isErrorHttpStatus('abc'); // false
```

## Migration

A new major version of this project is released if breaking changes are introduced. We maintain a [migration guide](docs/migration.md) to help users migrate between these versions.


## Contributing

[The contributing guide is available here](docs/contributing.md). All contributors must follow [this library's code of conduct](docs/code_of_conduct.md).


## License

Licensed under the [MIT](LICENSE) license.<br/>
Copyright &copy; 2024, Rowan Manning
