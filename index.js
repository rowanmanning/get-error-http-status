'use strict';

/**
 * @import { ErrorLike, getErrorHttpStatus } from '@rowanmanning/get-error-http-status'
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
 * @param {ErrorLike} error
 * @param {string} property
 * @returns {number | null}
 */
function getErrorHttpStatusFromProperty(error, property) {
	// There is no status property
	if (!error[property]) {
		return null;
	}

	const rawStatus = `${error[property]}`;
	const status = Number.parseInt(rawStatus, 10);

	// Check whether the status is valid
	const isValidStatus =
		// The error status is not a number
		!Number.isNaN(status) &&
		// The error status is a decimal
		`${rawStatus}` === `${status}` &&
		// The error status is out of range
		status >= 400 &&
		status < 600;

	return isValidStatus ? status : null;
}
