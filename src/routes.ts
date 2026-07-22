import { lazy, type ComponentType, type LazyExoticComponent } from "react";

export type Route = LazyExoticComponent<ComponentType<unknown>>;

export const routes = {
  "/examples/fallback": lazy(() => { throw new Error("STUB"); }),
  "/examples/render-prop": lazy(() => { throw new Error("STUB"); }),
  "/examples/fallback-component": lazy(
    () => { throw new Error("STUB"); },
  ),
  "/examples/error-logging": lazy(() => { throw new Error("STUB"); }),
  "/examples/async-user-code-errors": lazy(
    () => { throw new Error("STUB"); },
  ),
  "/examples/transition-errors": lazy(
    () => { throw new Error("STUB"); },
  ),
  "/examples/retry-nearest-boundary": lazy(
    () => { throw new Error("STUB"); },
  ),
  "/api/error-boundary-props": lazy(
    () => { throw new Error("STUB"); },
  ),
  "/api/use-error-boundary-hook": lazy(
    () => { throw new Error("STUB"); },
  ),
  "/api/with-error-boundary-hoc": lazy(
    () => { throw new Error("STUB"); },
  ),
  "/api/get-error-message": lazy(() => { throw new Error("STUB"); }),
} satisfies Record<string, Route>;

export type Routes = Record<keyof typeof routes, Route>;
export type Path = keyof Routes;
