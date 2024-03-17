import { fireEvent, render, screen } from "@testing-library/react";

import { Search } from "./Search";

describe("Search", () => {
  it("renders without crashing", () => {
    render(<Search value="" onChange={() => {}} />);
  });

  it("renders input with placeholder", () => {
    const placeholder = "Search Twitter";
    render(<Search value="" onChange={() => {}} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it("calls onChange callback on input change", () => {
    const onChange = jest.fn();
    render(<Search value="" onChange={onChange} />);
    const input = screen.getByPlaceholderText("Search Twitter");
    fireEvent.change(input, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalledWith("test");
  });
});
