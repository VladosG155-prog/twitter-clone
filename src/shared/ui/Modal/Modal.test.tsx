import { fireEvent, render, screen } from "@testing-library/react";

import { Modal } from "./Modal";

describe("test Modal component", () => {
  it("renders modal when isOpen is true", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        {null}
      </Modal>
    );
    const modalElement = screen.getByTestId("modal");
    expect(modalElement).toBeInTheDocument();
  });

  it("does not render modal when isOpen is false", () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        {null}
      </Modal>
    );
    const modalElement = screen.queryByTestId("modal");
    expect(modalElement).not.toBeInTheDocument();
  });

  it("calls onClose when clicking outside modal", () => {
    const onClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={onClose}>
        {null}
      </Modal>
    );
    const modalElement = screen.getByTestId("modal");
    fireEvent.click(modalElement);
    expect(onClose).not.toHaveBeenCalled();
    fireEvent.click(document.body);
  });
});
