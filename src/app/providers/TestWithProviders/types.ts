import { ReactNode } from "react";

import { AppStore } from "@/app/store";

export interface ITestWithProviders {
  children: ReactNode;
  store?: AppStore;
}
