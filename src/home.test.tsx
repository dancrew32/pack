import * as React from "react";
import * as TestRenderer from "react-test-renderer";

import Home from "./home";

test("<Home />", () => {
  const tree = TestRenderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
