import twitterImage from "@/shared/assets/OnBoardImage.png";

import { Footer } from "./Footer";

export const StartPage = () => {
  return (
    <div className=" max-h-80">
      <img src={twitterImage} width="300" height="300" alt="" />
      <span className=" text-red-300"></span>
      <Footer />
    </div>
  );
};
