import twitterImage from "@/shared/assets/OnBoardImage.png";

import { Footer } from "./Footer/Footer";
import { RightSection } from "./RightSection/RightSection";

export const StartPage = () => {
  return (
    <div className="h-[100vh]">
      <div className="flex max-h-[90%] items-center">
        <img
          src={twitterImage}
          className="max-w-[50%] object-contain mr-10 md:hidden"
          alt="twitter-image"
        />
        <RightSection />
      </div>
      <Footer />
    </div>
  );
};
