import { useEffect } from "react";
import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";

function UserProfileContainer({ username }: { username: string }) {
  return (
    <ErrorBoundary
      fallback={<p>Could not load profile</p>}
      resetKeys={[username]}
    >
      <UserProfile username={username} />
    </ErrorBoundary>
  );
}

function UserProfile({ username }: { username: string }) {
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
      throw new Error("STUB");
  }, [showBoundary, username]);

  return null;
}

// <end>

export { UserProfileContainer };

async function fetchGreeting(_: string) {}
