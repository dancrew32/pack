import * as React from "react";
import * as ReactDOM from "react-dom";
import testImage from "./test.png";
import "./style.css";

document.title = "App";

export default function Home() {
  return (
    <div className="container">
      <h1>Hello, world!</h1>
      <img src={testImage} className="container-img" />
      <p>This is the home page.</p>
      <p>Magnificent.</p>
    </div>
  );
}
