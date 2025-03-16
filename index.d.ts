export type ErrorLike = Error | (Error & Record<string, unknown>) | Record<string, unknown>;
export function getErrorHttpStatus(error: ErrorLike): number;
export function isErrorHttpStatus(status: number): boolean;
