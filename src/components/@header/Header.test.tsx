import { render, fireEvent } from "@testing-library/react";
import { Header } from "./Header";

it("Open modal on button click", () => {
  const { getByText, getByRole } = render(<Header />);
  const ciekawostkiButton = getByText("Ciekawostki");

  expect(() => getByRole("dialog")).toThrow();

  fireEvent.click(ciekawostkiButton);

  expect(getByRole("dialog")).toBeVisible();
});
