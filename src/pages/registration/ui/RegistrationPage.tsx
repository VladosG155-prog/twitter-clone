import { RegistrationForm } from "@/features/authentication/registration/ui/RegistrationForm";
import { Icon } from "@/shared/ui/Icon/Icon";
export const RegistrationPage = () => {
  return (
    <div className="flex h-[100vh] w-[650px] flex-col m-auto justify-center items-center">
      <Icon name="twitter" width={50} height={41} className="text-primary" />
      <h1 className="font-bold text-start self-start text-2xl mb-5">
        Create an account
      </h1>
      <RegistrationForm />
    </div>
  );
};
