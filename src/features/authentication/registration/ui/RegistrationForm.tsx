import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import { REGISTRATION } from "@/entities/session/model/actions";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { Button, Input } from "@/shared/ui";

import { IRegistrationFormData } from "../../model/interfaces";
import { RegistrationScheme } from "../../model/registration/registrationScheme";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationFormData>({
    resolver: zodResolver(RegistrationScheme),
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading } = useAppSelector((state) => state.session);

  const onSubmit = (data: IRegistrationFormData) => {
    dispatch(REGISTRATION(data));
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        error={errors.name?.message?.toString()}
        register={register}
        placeholder="Name"
      />
      <Input
        name="tel"
        error={errors.tel?.message?.toString()}
        register={register}
        placeholder="Phone number"
      />
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
