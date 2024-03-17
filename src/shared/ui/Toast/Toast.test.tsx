import { render, screen } from "@testing-library/react";

import { TestWithProviders } from "@/app/providers/TestWithProviders/TestWithProviders";

import { Toast } from "./Toast";
describe("Toast component", () => {
  test("renders text correctly", () => {
    const text = "Test toast message";
    render(
      <TestWithProviders>
        <Toast text={text} type="success" id="1" />
      </TestWithProviders>
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });
  test("render success type", () => {
    render(
      <TestWithProviders>
        <Toast text="Test" type="success" id="1" />
      </TestWithProviders>
    );
    expect(screen.getByTestId("toast")).toHaveClass("bg-green-500");
  });
  test("render warning type", () => {
    render(
      <TestWithProviders>
        <Toast text="Test" type="warning" id="1" />
      </TestWithProviders>
    );
    expect(screen.getByTestId("toast")).toHaveClass("bg-yellow-500");
  });
  test("render error type", () => {
    render(
      <TestWithProviders>
        <Toast text="Test" type="error" id="1" />
      </TestWithProviders>
    );
    expect(screen.getByTestId("toast")).toHaveClass("bg-red-500");
  });
});
