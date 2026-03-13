import { render, screen } from "@testing-library/react";
import PaceOutput from "../components/PaceOutput";

// check if PaceOutput component renders
describe("PaceOutput", () => {
  it("renders the PaceOutput component", () => {
    render(<PaceOutput />);
    screen.debug();
  });
});
