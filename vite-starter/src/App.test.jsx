import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button flow", () => {
  //render App
  render(<App />);

  //find initial button and check label
  const buttonElement = screen.getByRole("button", { name: /blue/ });
  //check color
  expect(buttonElement).toHaveClass("red");

  //run click button
  fireEvent.click(buttonElement);

  //check label and color
  expect(buttonElement).toHaveTextContent(/red/);
  expect(buttonElement).toHaveClass("blue");
});

test("checkbox flow", () => {
  render(<App />);
  //find initial button and checkbox
  const checkboxElement = screen.getByRole("checkbox");
  const buttonElement = screen.getByRole("button", { name: /blue/ });

  //check initial checkbox status and button color
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();
});
