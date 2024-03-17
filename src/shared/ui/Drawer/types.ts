import { ReactNode } from "react";

export interface IDrawerProps {
  children: ReactNode;
  title: string;
  onClose: () => void;
}
