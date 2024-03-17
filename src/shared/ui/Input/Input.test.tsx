import { render, screen } from "@testing-library/react";

import { Input } from "./Input";

describe("Input", () => {
  it("renders input with placeholder", () => {
    render(<Input placeholder="Username" name="username" />);
    const inputElement = screen.getByTestId("input");
    expect(inputElement).toBeInTheDocument();
  });
});
