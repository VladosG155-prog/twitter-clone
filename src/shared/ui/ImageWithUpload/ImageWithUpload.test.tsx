import { fireEvent, render, screen } from "@testing-library/react";

import { ImageWithUpload } from "./ImageWithUpload";

describe("ImageWithUpload", () => {
  it("renders upload button", () => {
    render(<ImageWithUpload onChange={() => {}}>{null}</ImageWithUpload>);
    const uploadButton = screen.getByText("Upload photo");
    expect(uploadButton).toBeInTheDocument();
  });

  it("calls onChange with selected file", () => {
    const onChange = jest.fn();
    render(<ImageWithUpload onChange={onChange}>{null}</ImageWithUpload>);
    const inputElement = screen.getByLabelText("Upload photo");
    const file = new File(["file content"], "example.png", {
      type: "image/png",
    });
    fireEvent.change(inputElement, { target: { files: [file] } });
    expect(onChange).toHaveBeenCalledWith(file);
  });
});
