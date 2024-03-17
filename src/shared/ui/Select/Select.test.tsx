import { fireEvent, render, screen } from "@testing-library/react";

import { Select } from "./Select";

const OPTIONS = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];

describe("test Select component", () => {
  it("renders without crashing", () => {
    render(
      <Select placeholder="" value="" onChange={() => null} options={OPTIONS} />
    );
  });

  it("renders placeholder", () => {
    const placeholder = "Select an option";
    render(
      <Select
        options={OPTIONS}
        value=""
        onChange={() => null}
        placeholder={placeholder}
      />
    );
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it("opens options on click", () => {
    render(
      <Select
        options={OPTIONS}
        value=""
        onChange={() => null}
        placeholder="Select an option"
      />
    );
    fireEvent.click(screen.getByPlaceholderText("Select an option"));
    expect(screen.queryByText("Option 1")).toBeInTheDocument();
  });

  it("selects option on click", () => {
    const onChange = jest.fn();
    render(
      <Select
        options={OPTIONS}
        value=""
        placeholder="Select an option"
        onChange={onChange}
      />
    );
    fireEvent.click(screen.getByPlaceholderText("Select an option"));
    fireEvent.click(screen.getByText("Option 1"));
    expect(onChange).toHaveBeenCalledWith("option1");
  });
});
