import * as React from "react";
import { useEffect } from "react";

import { Nav } from "./nav";

import "./style.css";

export default function About() {
  useEffect(() => {
    document.title = "About";
  }, []);
  return (
    <div className="container">
      <h1>About</h1>
      <Nav />
      <p>About what?</p>
    </div>
  );
}
