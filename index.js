/**
 * @import { ErrorLike, getErrorHttpStatus, isErrorHttpStatus } from '.'
 */

const DEFAULT_STATUS_CODE = 500;

/**
 * @type {typeof getErrorHttpStatus}
 */
export function getErrorHttpStatus(error) {
	if (typeof error !== 'object' || error === null || Array.isArray(error)) {
		return DEFAULT_STATUS_CODE;
	}
	return (
		getErrorHttpStatusFromProperty(error, 'status') ||
		getErrorHttpStatusFromProperty(error, 'statusCode') ||
		DEFAULT_STATUS_CODE
	);
}

/**
 * @type {typeof isErrorHttpStatus}
 */
export function isErrorHttpStatus(status) {
	return Number.isInteger(status) && status >= 400 && status < 600;
}

/**
 * @param {ErrorLike} error
 * @param {string} property
 * @returns {number | null}
 */
function getErrorHttpStatusFromProperty(error, property) {
	const status = Number(error[property]);
	return isErrorHttpStatus(status) ? status : null;
}
