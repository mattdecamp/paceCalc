import { render, screen } from "@testing-library/react";

import Button from "../components/Button";

// check if Button component renders
describe("Button component tests", () => {
  it("renders the button component", () => {
    render(<Button />);
    screen.debug();
  });
  it("contains a button tag with type=button"), () => {
    render(<Button />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    screen.debug();
  }
});
