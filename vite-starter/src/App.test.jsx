import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { kebabcaseToTitlecase } from "./util";
test("button flow", () => {
  //render App
  render(<App />);

  //find initial button and check label
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  //check color
  expect(buttonElement).toHaveClass("medium-violet-red");

  //run click button
  fireEvent.click(buttonElement);

  //check label and color
  expect(buttonElement).toHaveTextContent(/red/i);
  expect(buttonElement).toHaveClass("midnight-blue");
});

test("checkbox flow", () => {
  render(<App />);
  //find initial button and checkbox
  const checkboxElement = screen.getByRole("checkbox");
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  //check initial checkbox status and button color
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();

  //check the checkbox
  fireEvent.click(checkboxElement);

  //check checkbox status and button color
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toBeDisabled();

  //check the checkbox twice
  fireEvent.click(checkboxElement);

  //check checkbox status and button color
  expect(checkboxElement).not.toBeAttribute();
  expect(buttonElement).toBeEnabled();
});

test("btn status flow", () => {
  render(<App />);
  //find initial button and checkbox
  const checkboxElement = screen.getByRole("checkbox");
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  //check initial checkbox status and button color
  expect(checkboxElement).not.toBeChecked();
  expect(buttonElement).toBeEnabled();

  //run click btn
  fireEvent.click(buttonElement);

  //check btn color and text
  expect(buttonElement).toHaveClass("midnight-blue");
  expect(buttonElement).toHaveTextContent(/red/i);

  //run click the checkbox
  fireEvent.click(checkboxElement);

  //check the btn disable status and color
  expect(buttonElement).toHaveClass("gray");
  expect(buttonElement).toHaveTextContent(/red/i);

  //run click the checkbox
  fireEvent.click(checkboxElement);

  //check the btn enable status and color

  expect(buttonElement).toHaveClass("midnight-blue");
  expect(buttonElement).toHaveTextContent(/red/i);

  //run click btn
  fireEvent.click(buttonElement);

  //check the btn enable status and color
  expect(buttonElement).toHaveClass("medium-violet-red");
  expect(buttonElement).toHaveTextContent(/blue/i);
});

describe("kebabcase to titlecase", () => {
  test("no hyphens", () => {
    expect(kebabcaseToTitlecase("red")).toBe("Red");
  });
  test("one hyphens", () => {
    expect(kebabcaseToTitlecase("midnight-blue")).toBe("Midnight Blue");
  });
  test("no hyphens", () => {
    expect(kebabcaseToTitlecase("medium-violet-red")).toBe("Medium Violet Red");
  });
});
