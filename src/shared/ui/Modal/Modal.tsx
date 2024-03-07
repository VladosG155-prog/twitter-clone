import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

export const Modal = ({ children }: PropsWithChildren) => {
  return createPortal(<div>{children}</div>, document.body);
};
