'use strict';

/**
 * @import { ErrorLike, getErrorHttpStatus, isErrorHttpStatus } from '@rowanmanning/get-error-http-status'
 */

const DEFAULT_STATUS_CODE = 500;

/**
 * @type {getErrorHttpStatus}
 */
exports.getErrorHttpStatus = function getErrorHttpStatus(error) {
	if (typeof error !== 'object' || error === null || Array.isArray(error)) {
		return DEFAULT_STATUS_CODE;
	}
	return (
		getErrorHttpStatusFromProperty(error, 'status') ||
		getErrorHttpStatusFromProperty(error, 'statusCode') ||
		DEFAULT_STATUS_CODE
	);
};

/**
 * @type {isErrorHttpStatus}
 */
exports.isErrorHttpStatus = function isErrorHttpStatus(status) {
	return Number.isInteger(status) && status >= 400 && status < 600;
};

/**
 * @param {ErrorLike} error
 * @param {string} property
 * @returns {number | null}
 */
function getErrorHttpStatusFromProperty(error, property) {
	const status = Number(error[property]);
	return exports.isErrorHttpStatus(status) ? status : null;
}
