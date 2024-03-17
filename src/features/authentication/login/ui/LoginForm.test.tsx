import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";

import { TestWithProviders } from "@/app/providers/TestWithProviders/TestWithProviders";

import { IAuthFormData } from "../types";

import { LoginForm } from "./LoginForm";

const mockLogin = jest.fn((data: IAuthFormData) => {
  return Promise.resolve(data);
});

describe("LoginForm test", () => {
  it("should display required error when value is invalid", async () => {
    render(
      <TestWithProviders>
        <LoginForm onSubmit={mockLogin} />
      </TestWithProviders>
    );

    fireEvent.submit(screen.getByText("Next"));

    expect(mockLogin).not.toHaveBeenCalled();
  });
  it("should call on Submit", async () => {
    render(
      <TestWithProviders>
        <LoginForm onSubmit={mockLogin} />
      </TestWithProviders>
    );

    await act(async () => {
      fireEvent.change(screen.getByRole("email"), {
        target: {
          value: "test@gmail.com",
        },
      });
      fireEvent.change(screen.getByRole("password"), {
        target: {
          value: "123456",
        },
      });
    });

    await act(async () => {
      fireEvent.click(screen.getByRole("submit"));
    });

    expect(mockLogin).toHaveBeenCalled();
  });
});
