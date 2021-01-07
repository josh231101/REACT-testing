import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

test("renders the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  // Use DOM APIs querySelector to make assertions
  expect(root.querySelector("h1").textContent).toBe("TODOs");
  expect(root.querySelector("label").textContent).toBe(
    "What needs to be done?"
  );
  expect(root.querySelector("button").textContent).toBe("Add #1");
});
