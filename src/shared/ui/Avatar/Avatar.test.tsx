import { render } from "@testing-library/react";

import { Avatar } from "./Avatar";
describe("Avatar component", () => {
  test("renders with default size", () => {
    const { container } = render(<Avatar url="test-url" />);
    const imgElement = container.querySelector("img");
    expect(imgElement).toHaveClass("w-[50px] h-[50px]");
  });

  test("renders with large size", () => {
    const { container } = render(<Avatar url="test-url" size="lg" />);
    const imgElement = container.querySelector("img");
    expect(imgElement).toHaveClass(
      "w-[150px] h-[150px] md:w-[90px] md:h-[90px]"
    );
  });

  test("renders with medium size", () => {
    const { container } = render(<Avatar url="test-url" size="md" />);
    const imgElement = container.querySelector("img");
    expect(imgElement).toHaveClass("w-[60px] h-[60px]");
  });

  test("renders with default avatar if url is not provided", () => {
    const { container } = render(<Avatar />);
    const imgElement = container.querySelector("img");
    expect(imgElement).toHaveAttribute("src", "test-file-stub");
  });

  test("renders with provided url", () => {
    const url = "test-url";
    const { container } = render(<Avatar url={url} />);
    const imgElement = container.querySelector("img");
    expect(imgElement).toHaveAttribute("src", url);
  });
});
