import { footerLinks } from "../config";

export const Footer = () => {
  return (
    <div className="flex justify-center flex-wrap mt-5 items-center">
      {footerLinks.map((link) => (
        <span key={link} className="font-roboto mr-5 font-normal text-sm">
          {link}
        </span>
      ))}
    </div>
  );
};
