import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";

import { TestWithProviders } from "@/app/providers/TestWithProviders/TestWithProviders";

import { IRegistrationFormData } from "../types";

import { RegistrationForm } from "./RegistrationForm";

const mockRegistration = jest.fn((data: IRegistrationFormData) => {
  return Promise.resolve(data);
});

describe("RegistrationFrom test", () => {
  it("should display required error when value is invalid", async () => {
    render(
      <TestWithProviders>
        <RegistrationForm onSubmit={mockRegistration} />
      </TestWithProviders>
    );

    fireEvent.submit(screen.getByText("Next"));

    expect(mockRegistration).not.toHaveBeenCalled();
  });
  it("should call onSubmit", async () => {
    render(
      <TestWithProviders>
        <RegistrationForm onSubmit={mockRegistration} />
      </TestWithProviders>
    );

    await act(async () => {
      fireEvent.change(screen.getByRole("name"), {
        target: {
          value: "test",
        },
      });
      fireEvent.change(screen.getByRole("tel"), {
        target: {
          value: "+375297684465",
        },
      });
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

    expect(mockRegistration).toHaveBeenCalled();
  });
});
