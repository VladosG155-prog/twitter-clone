import { render, screen } from "@testing-library/react";

import { AddPicture } from "./AddPicture";

describe("AddPicture component", () => {
  test("renders correct", () => {
    render(<AddPicture value={null} onChange={() => {}} />);
    const labelElement = screen.getByTestId("addPicture");
    expect(labelElement).toBeInTheDocument();
  });

  test("renders input element correctly", () => {
    render(<AddPicture value={null} onChange={() => {}} />);
    const inputElement = screen.getByTestId("addPictureInput");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "file");
  });
});
