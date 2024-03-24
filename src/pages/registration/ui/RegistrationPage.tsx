import { REGISTRATION } from "@/entities/session/";
import { RegistrationForm } from "@/features/authentication/";
import { IRegistrationFormData } from "@/features/authentication/";
import { useAppDispatch } from "@/shared/model/hooks";
import { Icon } from "@/shared/ui/";

export const RegistrationPage = () => {
  const dispatch = useAppDispatch();

  const onSubmit = (data: IRegistrationFormData) => {
    dispatch(REGISTRATION(data));
  };

  return (
    <div className="m-auto flex h-[100vh] w-[650px] md:w-[100%] md:px-10 flex-col items-center justify-center">
      <Icon name="twitter" width={50} height={41} className="text-primary" />
      <h1 className="mb-5 self-start text-start text-2xl font-bold">
        Create an account
      </h1>
      <RegistrationForm onSubmit={onSubmit} />
    </div>
  );
};
