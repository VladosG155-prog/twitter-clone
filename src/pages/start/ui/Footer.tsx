import { footerLinks } from "../config";

export const Footer = () => {
  return (
    <div>
      {footerLinks.map((link) => (
        <span className="font-roboto text-sm">{link}</span>
      ))}
    </div>
  );
};
