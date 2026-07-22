import { useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";

function AddCommentContainer() {
  return (
    <ErrorBoundary fallback={<p>Could not add comment</p>}>
      <AddCommentButton />
    </ErrorBoundary>
  );
}

function AddCommentButton() {
    throw new Error("STUB");
}

// <end>

export { AddCommentContainer };

async function addComment() {
    throw new Error("STUB");
}
