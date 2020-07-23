import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "./router";

export function App() {
  return <Router />;
}

const root = document.getElementById("root") || document.createElement("div");
ReactDOM.render(<App />, root);
