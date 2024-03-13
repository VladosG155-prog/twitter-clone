import { render, screen } from "@testing-library/react";

import { Icon } from "./Icon";

describe("test Icon component", () => {
  it("correct render Icon", () => {
    render(<Icon name="home" />);

    const elem = screen.getByTestId("icon");

    expect(elem).toBeInTheDocument();
  });

  it("correct applied props to Icon", () => {
    render(<Icon name="home" width={30} height={30} />);

    const elem = screen.getByTestId("icon");

    expect(elem).toHaveAttribute("width", "30");
    expect(elem).toHaveAttribute("height", "30");
  });
});
