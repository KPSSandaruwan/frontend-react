import { render, screen, fireEvent } from "@testing-library/react";
import CountDashboard from "./CountDashboard";

describe("CountDashboard", () => {
  test("Render component with initial state", () => {
    render(<CountDashboard />);

    expect(screen.getByText("Count Calender")).toBeInTheDocument();
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
    expect(screen.getByText("Count Factorial: 1")).toBeInTheDocument();
    expect(screen.getByText("Name: John Doe")).toBeInTheDocument();
  });

  test("increments count when Increment button is clicked", () => {
    render(<CountDashboard />);
    
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
  
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
    expect(screen.getByText("Count Factorial: 1")).toBeInTheDocument();
  });
  
});