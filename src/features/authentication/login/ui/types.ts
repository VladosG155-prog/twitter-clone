import { IAuthFormData } from "../types";

export interface ILoginFormProps {
  onSubmit: (data: IAuthFormData) => void;
}
