import { render, screen } from "@testing-library/react";
import ConvertInput from "../components/ConvertInput";

// check if ConvertInput component renders
describe("ConvertInput", () => {
  it("renders the ConvertInput component", () => {
    render(<ConvertInput />);
    screen.debug();
  });
  it("measurement prop is passed", () => {
    render(<ConvertInput measurement="testMeasurement" />);
    expect(screen.getAllByLabelText('testMeasurement'))
    screen.debug();
  })
});
