import { ErrorBoundary, getErrorMessage, type FallbackProps } from "react-error-boundary";

function Fallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{getErrorMessage(error)}</pre>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}

<ErrorBoundary
  FallbackComponent={Fallback}
  onReset={(details) => {
      throw new Error("STUB");
  }}
>
  <YourApplication />
</ErrorBoundary>;

// <end>

function YourApplication() {
    throw new Error("STUB");
}
