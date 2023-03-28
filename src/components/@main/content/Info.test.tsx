import { render as rtlRender, screen } from "@testing-library/react";
import { Info } from "./Info";
import { Provider } from "react-redux";
import { store } from "../../../store/index";

const render = (component: React.ReactNode) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

it("render Sidebar in Main component", () => {
  render(<Info />);
  const title = screen.queryByText("/Wybierz kraj/i");
  expect(title);
});
