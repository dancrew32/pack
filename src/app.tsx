import * as React from "react";
import * as ReactDOM from "react-dom";
import testImage from "./test.png";
import "./style.css";

document.title = "App";

export function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <img src={testImage} />
    </div>
  );
}

const root = document.getElementById("root") || document.createElement("div");
ReactDOM.render(<App />, root);
