import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

/* WHAT RENDER DOES EX.
  const render = (component)=>{
    const root = document.createElement("div");
    ReactDOM.render(component,root);
    return getQueriesForElement(root);
  }
*/

test("renders the correct content", () => {
  const { getByText, getByLabelText } = render(<App />);

  expect(getByText("TODOs"));
  expect(getByLabelText("What needs to be done?"));
  expect(getByText("Add #1"));
});
