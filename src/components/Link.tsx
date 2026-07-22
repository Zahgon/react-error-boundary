import type { HTMLAttributes } from "react";
import { Link as ExternalLink } from "react-lib-tools";
import type { Path } from "../routes";

export function Link({
  to,
  ...rest
}: HTMLAttributes<HTMLSpanElement> & {
  to: Path;
}) {
    throw new Error("STUB");
}
