import { fireEvent, render, screen } from "@testing-library/react";
import OrderSummaryForm from "../OrderSummaryForm";

test("Initial SummaryForm condtiion", () => {
  render(<OrderSummaryForm />);

  //Test initial checkbox status (unchecked) and button active
  const checkbox = screen.getByRole("checkbox", { name: /agree/i });
  const confirmBtn = screen.getByRole("button", { name: "confrim order" });

  expect(checkbox).not.toBeChecked();
  expect(confirmBtn).toBeDisabled();
});

test("Checkbox disabled button on first click and enables on second click", () => {
  render(<OrderSummaryForm />);

  const checkbox = screen.getByRole("checkbox", { name: /agree/i });
  const confirmBtn = screen.getByRole("button", { name: "confrim order" });

  //first click the checkbox
  fireEvent.click(checkbox);

  //Check checked checkbox and disabled button status
  expect(checkbox).toBeChecked();
  expect(confirmBtn).toBeEnabled();

  //second click the checkbox
  fireEvent.click(checkbox);

  //Check unChecked checkbox and enabled button status
  expect(checkbox).not.toBeChecked();
  expect(confirmBtn).toBeDisabled();
});
