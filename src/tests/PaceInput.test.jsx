import { render, screen } from "@testing-library/react";
import PaceInput from "../components/PaceInput";

// check if PaceInput component renders
describe("PaceInput tests", () => {
  it("renders the PaceInput component", () => {
    render(<PaceInput />);
  });
  it("labelName prop passes to proper fields", () => {
    render(<PaceInput labelName="testLabel" />);
    expect(screen.getByLabelText("testLabel"));
  });
  it("placeholder prop passes to proper field", () => {
    render(<PaceInput placeholder="placeholderText" />);
    expect(screen.getByPlaceholderText("placeholderText"));
  });
  screen.debug();
});
