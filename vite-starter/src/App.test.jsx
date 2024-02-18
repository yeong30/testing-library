import { render, screen } from "@testing-library/react";
import App from "./App";

test("button start with correct color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/ });
  expect(buttonElement).toHaveClass("red");
});
