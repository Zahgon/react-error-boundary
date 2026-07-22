import type { ErrorInfo } from "react";
import { ErrorBoundary } from "react-error-boundary";

function logError(error: unknown, info: ErrorInfo) {
    throw new Error("STUB");
}

<ErrorBoundary FallbackComponent={ErrorFallback} onError={logError}>
  <YourApplication />
</ErrorBoundary>;

// <end>

function ErrorFallback() {
    throw new Error("STUB");
}

function YourApplication() {
    throw new Error("STUB");
}
