import GoogleIcon from "@/shared/assets/icons/google.svg?react";
import TwitterIcon from "@/shared/assets/icons/twitter.svg?react";
import { Button } from "@/shared/ui/Button/Button";

export const RightSection = () => {
  return (
    <div>
      <TwitterIcon width={50} height={41} className="text-primary" />
      <h1 className="text-4xl font-roboto font-black">Happening now</h1>
      <h2 className="text-3xl font-roboto font-black mb-5">
        Join Twitter today
      </h2>
      <Button
        icon={<GoogleIcon />}
        text="Sign up with Google"
        variant="outlined"
        className="w-[400px]"
      />
      <Button
        text="Sign up with email"
        variant="outlined"
        className="w-[400px]"
      />
    </div>
  );
};
