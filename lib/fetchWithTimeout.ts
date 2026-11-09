import { AppError } from "@/lib/errors";

export async function fetchWithTimeout(
  url: string,
  timeoutMs: number = 5000,
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (response.status === 403)
      throw new AppError("FORBIDDEN", "Forbidden");
    return response;
  } catch (error) {
    if (controller.signal.aborted) {
      throw new AppError("TIMEOUT", "Request timed out");
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}
