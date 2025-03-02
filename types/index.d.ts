declare module '@rowanmanning/get-error-http-status' {
	export type ErrorLike = (Error & Record<string, unknown>) | Record<string, unknown>;
	export function getErrorHttpStatus(error: ErrorLike): number;
}
