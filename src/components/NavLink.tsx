import { type PropsWithChildren } from "react";
import { NavLink as NavLinkExternal, type DefaultPath } from "react-lib-tools";
import { type Path } from "../routes";

export function NavLink({
  children,
  className,
  path,
}: PropsWithChildren<{
  className?: string | undefined;
  path: Path | DefaultPath;
}>) {
    throw new Error("STUB");
}
