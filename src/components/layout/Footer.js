import React from "react";
import { FacebookIcon, LinkedinIcon, EmailIcon } from "react-share";
const link = [
  {
    name: "facebook",
    icons: <FacebookIcon size={40}></FacebookIcon>,
    href: "https://www.facebook.com/Bui.Ngoc.1302/",
  },
  {
    name: "email",
    icons: <EmailIcon size={40}></EmailIcon>,
    href: "mailto:buithuyngoc1@gmail.com",
  },
  {
    name: "linkedin",
    icons: <LinkedinIcon size={40}></LinkedinIcon>,
    href: "https://www.linkedin.com/in/b%C3%B9i-ng%E1%BB%8Dc-351016215/",
  },
];

const Footer = () => {
  const date = new Date();
  return (
    <div className="flex flex-col items-center justify-center px-10 py-8 my-10 bg-white rounded-lg gap-y-5 container-page">
      <div className="flex items-center justify-center gap-x-5">
        {link.map((item) => (
          <a
            href={item.href}
            target="_blank"
            className="overflow-hidden rounded-full "
          >
            {item.icons}
          </a>
        ))}
      </div>
      <span className="text-text3">
        Copyright {date.getFullYear()} © Bui Ngoc
      </span>
    </div>
  );
};

export default Footer;
