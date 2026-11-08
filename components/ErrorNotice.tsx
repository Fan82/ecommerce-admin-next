"use client";

export type ErrorNoticeProps = {
  message: string | null;
  onRetry?: () => void;
};

export function ErrorNotice({ message, onRetry }: ErrorNoticeProps) {
  if (message === null) return null;
  return (
    <div role="alert">
      <p>{message}</p>
      {onRetry && (
        <button type="button" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
}
