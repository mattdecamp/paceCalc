import { render, screen, fireEvent } from "@testing-library/react";
import PacePanel from "../components/panels/PacePanel";

// check if PacePanel component renders
describe("PacePanel", () => {
  it("renders the PacePanel component", () => {
    render(<PacePanel />);
    screen.debug();
  });
  it("updates the hours input field", () => {
    render(<PacePanel />);
    fireEvent.change(screen.getByLabelText(/hours/i), {
      target: { value: 23 },
    });
    screen.debug();
  });
});
