import { render, screen, fireEvent } from "@testing-library/react";
import CustomButton from "./CustomButton.jsx";

test("renders the button with correct label", () => {
  render(<CustomButton label="Click Me" />);
  const buttonElement = screen.getByText(/Click Me/i);
  expect(buttonElement).toBeInTheDocument();
});

test("calls onClick when button is clicked", () => {
  const handleClick = jest.fn();
  render(<CustomButton label="Click Me" onClick={handleClick} />);
  const buttonElement = screen.getByText(/Click Me/i);
  
  fireEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
