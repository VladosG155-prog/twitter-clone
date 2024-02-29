import { RegistrationForm } from "@/features/authentication/registration/ui/RegistrationForm";
import TwitterIcon from "@/shared/assets/icons/twitter.svg?react";
export const RegistrationPage = () => {
  return (
    <div className="flex h-[100vh] w-[650px] flex-col m-auto justify-center items-center">
      <TwitterIcon width={50} height={41} className="text-primary" />
      <h1 className="font-bold text-start self-start text-2xl mb-5">
        Create an account
      </h1>
      <RegistrationForm />
    </div>
  );
};
