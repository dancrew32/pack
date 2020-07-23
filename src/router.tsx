import * as React from "react";
import { lazy, Suspense } from "react";
import { useRoutes } from "hookrouter";

const Home = lazy(() => import("./home"));
const About = lazy(() => import("./about"));

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
};

export function Router() {
  const routeResult = useRoutes(routes);
  return <Suspense fallback={"Loading..."}>{routeResult || "404"}</Suspense>;
}
