import { UserProfile } from "./WithErrorBoundaryA";

// <begin>

import { withErrorBoundary } from "react-error-boundary";

const UserProfileWithErrorBoundary = withErrorBoundary(UserProfile, {
  fallback: <div>Something went wrong</div>,
  onError(error, info) {
      throw new Error("STUB");
  },
});

// <end>

export { UserProfileWithErrorBoundary };
