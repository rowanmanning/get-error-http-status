'use strict';

const {assert} = require('chai');

describe('lib/get-error-http-status', () => {
	let getErrorHttpStatus;

	beforeEach(() => {
		getErrorHttpStatus = require('../../../lib/get-error-http-status');
	});

	describe('getErrorHttpStatus(error)', () => {

		describe('when `error` has a numeric `status` property', () => {
			it('returns the value of the `status` property', () => {
				const error = new Error('mock error');
				error.status = 456;
				assert.strictEqual(getErrorHttpStatus(error), 456);
			});
		});

		describe('when `error` has a numeric `statusCode` property', () => {
			it('returns the value of the `statusCode` property', () => {
				const error = new Error('mock error');
				error.statusCode = 456;
				assert.strictEqual(getErrorHttpStatus(error), 456);
			});
		});

		describe('when `error` has numeric `status` and `statusCode` properties', () => {
			it('returns the value of the `status` property', () => {
				const error = new Error('mock error');
				error.status = 456;
				error.statusCode = 567;
				assert.strictEqual(getErrorHttpStatus(error), 456);
			});
		});

		describe('when `error` has a numeric string `status` property', () => {
			it('returns the value of the `status` property parsed as an integer', () => {
				const error = new Error('mock error');
				error.status = '456';
				assert.strictEqual(getErrorHttpStatus(error), 456);
			});
		});

		describe('when `error` has a numeric string `statusCode` property', () => {
			it('returns the value of the `statusCode` property parsed as an integer', () => {
				const error = new Error('mock error');
				error.statusCode = '456';
				assert.strictEqual(getErrorHttpStatus(error), 456);
			});
		});

		describe('when `error` has no `status` or `statusCode` property', () => {
			it('returns 500', () => {
				const error = new Error('mock error');
				assert.strictEqual(getErrorHttpStatus(error), 500);
			});
		});

		describe('when `error` has a non-numeric `status` property', () => {
			it('returns 500', () => {
				const error = new Error('mock error');
				error.status = {};
				assert.strictEqual(getErrorHttpStatus(error), 500);
			});
		});

		describe('when `error` has a non-numeric `statusCode` property', () => {
			it('returns 500', () => {
				const error = new Error('mock error');
				error.statusCode = {};
				assert.strictEqual(getErrorHttpStatus(error), 500);
			});
		});

		describe('when `error` has a decimal `status` property', () => {
			it('returns 500', () => {
				const error = new Error('mock error');
				error.status = 456.789;
				assert.strictEqual(getErrorHttpStatus(error), 500);
			});
		});

		describe('when `error` has a decimal `statusCode` property', () => {
			it('returns 500', () => {
				const error = new Error('mock error');
				error.statusCode = 456.789;
				assert.strictEqual(getErrorHttpStatus(error), 500);
			});
		});

		describe('when `error` has non-numeric `status` property but a numeric `statusCode` property', () => {
			it('returns the value of the `statusCode` property', () => {
				const error = new Error('mock error');
				error.status = {};
				error.statusCode = 456;
				assert.strictEqual(getErrorHttpStatus(error), 456);
			});
		});

		describe('when `error` has a numeric `status` property lower than 400', () => {
			it('returns 500', () => {
				const error = new Error('mock error');
				error.status = 399;
				assert.strictEqual(getErrorHttpStatus(error), 500);
			});
		});

		describe('when `error` has a numeric `statusCode` property lower than 400', () => {
			it('returns 500', () => {
				const error = new Error('mock error');
				error.statusCode = 399;
				assert.strictEqual(getErrorHttpStatus(error), 500);
			});
		});

		describe('when `error` has a numeric `status` property higher than 599', () => {
			it('returns 500', () => {
				const error = new Error('mock error');
				error.status = 600;
				assert.strictEqual(getErrorHttpStatus(error), 500);
			});
		});

		describe('when `error` has a numeric `statusCode` property higher than 599', () => {
			it('returns 500', () => {
				const error = new Error('mock error');
				error.statusCode = 600;
				assert.strictEqual(getErrorHttpStatus(error), 500);
			});
		});

		describe('when `error` is a plain object which has a numeric `status` property', () => {
			it('returns the value of the `status` property', () => {
				const error = {
					status: 456
				};
				assert.strictEqual(getErrorHttpStatus(error), 456);
			});
		});

		describe('when `error` is a plain object which has a numeric `statusCode` property', () => {
			it('returns the value of the `statusCode` property', () => {
				const error = {
					statusCode: 456
				};
				assert.strictEqual(getErrorHttpStatus(error), 456);
			});
		});

		describe('when `error` is a non-object', () => {
			it('returns 500', () => {
				assert.strictEqual(getErrorHttpStatus('mock'), 500);
			});
		});

		describe('when `error` is an array', () => {
			it('returns 500', () => {
				assert.strictEqual(getErrorHttpStatus([]), 500);
			});
		});

		describe('when `error` is `null`', () => {
			it('returns 500', () => {
				assert.strictEqual(getErrorHttpStatus(null), 500);
			});
		});

		describe('when `error` is not defined', () => {
			it('returns 500', () => {
				assert.strictEqual(getErrorHttpStatus(), 500);
			});
		});

	});

	describe('.default', () => {
		it('aliases the module exports', () => {
			assert.strictEqual(getErrorHttpStatus, getErrorHttpStatus.default);
		});
	});

});
