import { ReactNode } from "react";

export interface IImageWithUploadProps {
  children: ReactNode;
  onChange: (file: File | null) => void;
}
