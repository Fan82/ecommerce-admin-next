export type ErrorCode =
  | "INVALID_CREDENTIALS"
  | "FORBIDDEN"
  | "TIMEOUT"
  | "UNKNOWN";

export class AppError extends Error {
  code: ErrorCode;

  constructor(code: ErrorCode, message: string) {
    super(message);
    this.code = code;
  }
}

export function getUserMessage(error: unknown): string {
  if (error instanceof AppError) {
    if (error.code === "INVALID_CREDENTIALS")
      return "Email or password is wrong.";
    if (error.code === "FORBIDDEN")
      return "You do not have permission to view this page.";
    if (error.code === "TIMEOUT")
      return "The server took too long to respond. Please try again.";
  }
  return "Something went wrong. Please try again.";
}



