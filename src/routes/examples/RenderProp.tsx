import { ErrorBoundary, getErrorMessage } from "react-error-boundary";

<ErrorBoundary
  fallbackRender={({ error, resetErrorBoundary }) => { throw new Error("STUB"); }}
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
