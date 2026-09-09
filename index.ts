const DEFAULT_STATUS_CODE = 500;

export function getErrorHttpStatus(error: unknown) {
	if (!isObject(error)) {
		return DEFAULT_STATUS_CODE;
	}
	return (
		getErrorHttpStatusFromProperty(error, 'status') ||
		getErrorHttpStatusFromProperty(error, 'statusCode') ||
		DEFAULT_STATUS_CODE
	);
}

export function isErrorHttpStatus(status: unknown): status is number {
	return Boolean(
		typeof status === 'number' && Number.isInteger(status) && status >= 400 && status < 600
	);
}

function isObject(value: unknown): value is Record<string, unknown> {
	return Boolean(value && typeof value === 'object' && !Array.isArray(value));
}

function getErrorHttpStatusFromProperty(error: Record<string, unknown>, property: string) {
	const status = Number(error[property]);
	return isErrorHttpStatus(status) ? status : null;
}
