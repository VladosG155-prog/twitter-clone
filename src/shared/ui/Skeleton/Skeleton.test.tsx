import { render, screen } from "@testing-library/react";

import { Skeleton } from "./Skeleton";

describe("test Skeleton component", () => {
  it("correct render Skeleton", () => {
    render(<Skeleton />);

    const elem = screen.getByTestId("skeleton");

    expect(elem).toBeInTheDocument();
  });
});
