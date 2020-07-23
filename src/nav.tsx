import * as React from "react";
import { A, usePath } from "hookrouter";

const pathToText = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];

export function Nav() {
  const path = usePath();
  return (
    <nav>
      {pathToText.map((item) => (
        <A href={item.href} key={item.href}>
          {item.text}
        </A>
      ))}
    </nav>
  );
}
