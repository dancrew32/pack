import * as React from "react";
import { useEffect } from "react";

import { Nav } from "./nav";

import testImage from "./test.png";
import "./style.css";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className="container">
      <h1>Hello, world!</h1>
      <Nav />
      <img src={testImage} className="container-img" />
      <p>This is the home page.</p>
      <p>Magnificent.</p>
    </div>
  );
}
