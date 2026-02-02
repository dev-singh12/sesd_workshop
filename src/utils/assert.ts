import { ApiError } from "./api_error";

export function assertUser<T>(
    value: T,
    message = "User not found"
): asserts value is NonNullable<T> {
    if (value === null || value === undefined) {
        throw new ApiError(401, message);
    }
}



