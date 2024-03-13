import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LOGIN } from "@/entities/session/model/actions";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { Button, Input } from "@/shared/ui";

import { IAuthFormData } from "../../registration/types";
import { LoginScheme } from "../model/loginScheme";

export const LoginForm = () => {
  const { handleSubmit, control } = useForm<IAuthFormData>({
    resolver: zodResolver(LoginScheme),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.session);

  const onSubmit = (data: IAuthFormData) => {
    dispatch(LOGIN(data));
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <Input {...field} error={fieldState.error} placeholder="Email" />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            error={fieldState.error}
            type="password"
            placeholder="Password"
          />
        )}
      />

      {isLoading && <h1>Loading...</h1>}
      <Button type="submit" text="Next" className="mt-3" />
    </form>
  );
};
