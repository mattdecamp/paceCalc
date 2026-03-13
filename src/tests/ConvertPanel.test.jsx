import { render, screen } from "@testing-library/react";
import ConvertPanel from "../components/panels/ConvertPanel";

// check if ConverPanel component renders
describe("ConvertPanel", () => {
  it("renders the ConvertPanel component", () => {
    render(<ConvertPanel />);
    screen.debug();
  });
});
