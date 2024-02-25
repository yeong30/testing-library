import { fireEvent, render, screen } from "@testing-library/react";
import OrderSummaryForm from "../OrderSummaryForm";
import userEvent from "@testing-library/user-event";

test("Initial SummaryForm condtiion", () => {
  render(<OrderSummaryForm />);

  //Test initial checkbox status (unchecked) and button active
  const checkbox = screen.getByRole("checkbox", { name: /약관/i });
  const confirmBtn = screen.getByRole("button", { name: "주문하기" });

  expect(checkbox).not.toBeChecked();
  expect(confirmBtn).toBeDisabled();
});

test("Checkbox disabled button on first click and enables on second click", async () => {
  const user = userEvent.setup();
  render(<OrderSummaryForm />);

  const checkbox = screen.getByRole("checkbox", { name: /약관/i });
  const confirmBtn = screen.getByRole("button", { name: "주문하기" });

  //first click the checkbox
  await user.click(checkbox);

  //Check checked checkbox and disabled button status
  expect(checkbox).toBeChecked();
  expect(confirmBtn).toBeEnabled();

  //second click the checkbox
  await user.click(checkbox);

  //Check unChecked checkbox and enabled button status
  expect(checkbox).not.toBeChecked();
  expect(confirmBtn).toBeDisabled();
});

test("popover responds to hover", async () => {
  const user = userEvent.setup();
  //Check inital status. popover is disappers;

  const nullPopover = screen.queryByText(/실제 아이스크림은 배달되지 않습니다/i);

  // expect(nullPopover).toBeNull();
  expect(nullPopover).not.toBeInTheDocument();

  //Check popover appears on mouseover
  const termsAndConditions = screen.getByText(/약관/i);

  user.hover(termsAndConditions);
  const popover = screen.queryByText(/실제 아이스크림은 배달되지 않습니다/i);
  expect(popover).toBeInTheDocument();

  user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
  //Check popover disappears on mouseout
});
