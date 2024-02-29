import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LOGIN } from "@/entities/session/model/actions";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { Button, Input } from "@/shared/ui";

import { IAuthFormData } from "../../model/interfaces";
import { LoginScheme } from "../../model/login/loginScheme";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthFormData>({
    resolver: zodResolver(LoginScheme),
  });

  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.session);

  const onSubmit = (data: IAuthFormData) => {
    dispatch(LOGIN(data));
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="email"
        error={errors.email?.message?.toString()}
        register={register}
        placeholder="Email"
      />
      <Input
        name="password"
        error={errors.password?.message?.toString()}
        register={register}
        placeholder="Password"
      />
      {isLoading && <h1>Loading...</h1>}
      <Button type="submit" text="Next" className="mt-3" />
    </form>
  );
};
