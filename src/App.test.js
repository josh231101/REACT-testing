import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";

import App from "./App";
import { api } from "./api";

// Normally you can mock entire module using jest.mock('./api);
const mockCreateItem = (api.createItem = jest.fn());

test("allows users to add items to their list", async () => {
  const todoText = "Todo new item";
  mockCreateItem.mockResolvedValueOnce({ id: 123, text: todoText });

  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText("What needs to be done?");
  const button = getByText("Add #1");
  fireEvent.change(input, { target: { value: todoText } });
  fireEvent.click(button);

  await wait(() => getByText(todoText));

  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(
    "/items",
    expect.objectContaining({ text: todoText })
  );
});
