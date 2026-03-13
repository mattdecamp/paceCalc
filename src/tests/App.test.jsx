import { render, screen, fireEvent } from "@testing-library/react";

import App from "../App";

// check if App components renders app
describe("App renders", () => {
  it("renders the application", () => {
    render(<App />);
    screen.debug();
  });
  it("Pace and Convert Tabs render", () => {
    render(<App />);
    expect(screen.getByText("Pace")).toBeInTheDocument();
    expect(screen.getByText("Convert")).toBeInTheDocument();
    screen.debug();
  });
  it("Hours, Minutes, and Seconds inputs render", () => {
    render(<App />);
    expect(screen.getByText("Hours")).toBeInTheDocument();
    expect(screen.getByText("Minutes")).toBeInTheDocument();
    expect(screen.getByText("Seconds")).toBeInTheDocument();
    screen.debug();
  });
  it("Calculate and Reset buttons render", () => {
    render(<App />);
    expect(screen.getByText("Calculate")).toBeInTheDocument();
    expect(screen.getByText("Reset")).toBeInTheDocument();
    screen.debug();
  });
  it("Pace label, result output, and mi render", () => {
    render(<App />);
    expect(screen.getByText("Pace:")).toBeInTheDocument();
    expect(screen.getByText("00:00:00")).toBeInTheDocument();
    expect(screen.getByText("/ mi")).toBeInTheDocument();
    screen.debug();
  });
  
  
});
