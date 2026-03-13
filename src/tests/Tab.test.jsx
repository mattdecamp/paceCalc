import { render, screen } from "@testing-library/react";

import Tab from "../components/Tab";

// check if Tab component renders
describe("Tab Component", () => {
  it("renders the Tab component", () => {
    render(<Tab />);
    screen.debug();
  });
  it("a button with the role of tab renders", () => {
    render(<Tab />);
    expect(screen.getByRole('tab')).toBeInTheDocument();
    screen.debug();
  });
});
