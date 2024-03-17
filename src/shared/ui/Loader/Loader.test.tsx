import { render, screen } from "@testing-library/react";

import { Loader } from "./Loader";

describe("Loader component", () => {
  test("renders loader", () => {
    render(<Loader />);
    const loaderElement = screen.getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();
  });
});
