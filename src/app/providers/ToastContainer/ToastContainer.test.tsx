import { render } from "@testing-library/react";

import { TestWithProviders } from "../TestWithProviders/TestWithProviders";

import { ToastContainer } from "./ToastContainer";

describe("ToastContainer component", () => {
  test("renders toast container without toasts", () => {
    render(
      <TestWithProviders>
        <ToastContainer />
      </TestWithProviders>
    );
  });
});
