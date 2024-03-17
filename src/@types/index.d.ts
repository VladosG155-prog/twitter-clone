declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string }
  >;
  export default ReactComponent;
}

declare type RootState = import("app/store").RootState;

declare type AppDispatch = import("app/store").AppDispatch;

declare namespace Cypress {
  interface Chainable {
    login(name: string): void;
  }
}
