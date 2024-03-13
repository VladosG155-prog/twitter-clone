import { render, screen } from "@testing-library/react";

import { Switch } from "./Switch";

describe("test Icon component", () => {
  it("correct render Icon", () => {
    render(<Switch checked onChange={jest.fn()} />);

    const elem = screen.getByTestId("switch");

    expect(elem).toBeInTheDocument();
  });
});
