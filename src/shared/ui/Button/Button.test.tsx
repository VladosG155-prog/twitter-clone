import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("Button component", () => {
  test("renders button with text", () => {
    const buttonText = "Click me";
    render(<Button text={buttonText} />);
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders button with specified variant", () => {
    const buttonText = "Click me";
    render(<Button text={buttonText} variant="outlined" />);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveClass("border-gray-300 border");
  });

  test("renders button with specified type", () => {
    const buttonText = "Click me";
    render(<Button text={buttonText} type="submit" />);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveAttribute("type", "submit");
  });
});
