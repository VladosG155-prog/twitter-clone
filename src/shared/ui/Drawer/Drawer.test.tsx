import { fireEvent, render, screen } from "@testing-library/react";

import { Drawer } from "./Drawer";

describe("Drawer component", () => {
  const mockOnClose = jest.fn();

  test("renders drawer with title", () => {
    const title = "Test Title";
    render(
      <Drawer title={title} onClose={mockOnClose}>
        Test Content
      </Drawer>
    );
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  test("calls onClose when icon is clicked", () => {
    render(
      <Drawer title="Test" onClose={mockOnClose}>
        Test Content
      </Drawer>
    );
    const iconElement = screen.getByTestId("icon");
    fireEvent.click(iconElement);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("renders children", () => {
    render(
      <Drawer title="Test" onClose={mockOnClose}>
        <div>Test Content</div>
      </Drawer>
    );
    const contentElement = screen.getByText("Test Content");
    expect(contentElement).toBeInTheDocument();
  });
});
