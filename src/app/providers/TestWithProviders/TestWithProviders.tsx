import { FC } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { setupStore } from "@/app/store";

import { ITestWithProviders } from "./types";

export const TestWithProviders: FC<ITestWithProviders> = ({
  children,
  store,
}) => {
  const usedStore = store ?? setupStore();

  return (
    <MemoryRouter>
      <Provider store={usedStore}>{children}</Provider>
    </MemoryRouter>
  );
};
