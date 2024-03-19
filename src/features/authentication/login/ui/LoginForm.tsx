import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "@/shared/ui";

import { LoginScheme } from "../model/loginScheme";
import { IAuthFormData } from "../types";

import { ILoginFormProps } from "./types";

export const LoginForm: FC<ILoginFormProps> = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm<IAuthFormData>({
    resolver: zodResolver(LoginScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmitForm = (data: IAuthFormData) => {
    onSubmit(data);
  };

  return (
    <div className="w-full">
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            role="email"
            error={fieldState.error}
            placeholder="Email"
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            role="password"
            error={fieldState.error}
            type="password"
            placeholder="Password"
          />
        )}
      />

      <Button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit(handleSubmitForm)();
        }}
        type="submit"
        text="Next"
        role="submit"
        className="mt-3"
      />
    </div>
  );
};
