import React from "react";
import ReactDOM from "react-dom";
import { getQueriesForElement } from "@testing-library/dom";

import App from "./App";

test("renders the correct content", () => {
  const root = document.createElement("div");
  ReactDOM.render(<App />, root);

  const { getByText, getByLabelText } = getQueriesForElement(root);
  // Use DOM APIs querySelector to make assertions
  //  expect(root.querySelector("h1").textContent).toBe("TODOs");
  //  expect(root.querySelector("label").textContent).toBe(
  //    "What needs to be done?"
  //  );
  //  expect(root.querySelector("button").textContent).toBe("Add #1");

  // Using react testing library to avoid the repetition seen before
  expect(getByText("TODOs")).not.toBeNull();
  expect(getByLabelText("What needs to be done?")).not.toBeNull();
  expect(getByText("Add #1")).not.toBeNull();
});
