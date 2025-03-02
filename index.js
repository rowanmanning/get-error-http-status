'use strict';

const DEFAULT_STATUS_CODE = 500;

/**
 * @typedef {Error & {[key: string]: any} | {[key: string]: any}} ErrorLike
 */

/**
 * Get the HTTP status code for an error.
 *
 * @param {ErrorLike} error - The error to get the HTTP status code for.
 * @returns {number} - Returns the HTTP status code.
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
 * Get an HTTP status code from an error property.
 *
 * @private
 * @param {ErrorLike} error - The error to check the property of.
 * @param {string} property - The property name to check.
 * @returns {number | null} - Returns the HTTP status code or null if one is not found.
 */
function getErrorHttpStatusFromProperty(error, property) {
	// There is no status property
	if (!error[property]) {
		return null;
	}

	const rawStatus = error[property];
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
