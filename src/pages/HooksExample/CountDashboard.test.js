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

  test("decrements count when Decrement button is clicked", () => {
    render(<CountDashboard />);
    
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
  
    expect(screen.getByText("Count: -1")).toBeInTheDocument();
  });
  
  test("resets count when Reset button is clicked", () => {
    render(<CountDashboard />);
    
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    
    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);
  
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });
  
  test("updates name when Update Name button is clicked", () => {
    render(<CountDashboard />);
    
    const nameBefore = screen.getByText(/Name:/i).textContent;
    const updateNameButton = screen.getByText("Update Name");
    
    fireEvent.click(updateNameButton);
    
    const nameAfter = screen.getByText(/Name:/i).textContent;
    expect(nameBefore).not.toBe(nameAfter);
  });
  
  test("calculates factorial correctly", () => {
    render(<CountDashboard />);
    
    const incrementButton = screen.getByText("Increment");
    
    fireEvent.click(incrementButton); // Count: 1
    expect(screen.getByText("Count Factorial: 1")).toBeInTheDocument();
    
    fireEvent.click(incrementButton); // Count: 2
    expect(screen.getByText("Count Factorial: 2")).toBeInTheDocument();
  
    fireEvent.click(incrementButton); // Count: 3
    expect(screen.getByText("Count Factorial: 6")).toBeInTheDocument();
  
    fireEvent.click(incrementButton); // Count: 4
    expect(screen.getByText("Count Factorial: 24")).toBeInTheDocument();
  });
  
});