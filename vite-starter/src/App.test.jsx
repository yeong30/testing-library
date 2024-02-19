import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("button start with correct color and label", () => {
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
