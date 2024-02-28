import { Link } from "react-router-dom";

import { footerLinks } from "../config";

export const Footer = () => {
  return (
    <div className="flex justify-center flex-wrap mt-5 items-center">
      {footerLinks.map((link) => (
        <Link key={link} className="hover:text-primary" to={link}>
          <span className="font-roboto mr-5 font-normal text-sm">{link}</span>
        </Link>
      ))}
      <span className="font-roboto mr-5 font-normal text-sm">
        © 2021 Twitter, Inc.
      </span>
    </div>
  );
};
