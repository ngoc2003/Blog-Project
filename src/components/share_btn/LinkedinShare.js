import React from "react";
import { LinkedinShareButton } from "react-share";
import { LinkedinIcon } from "react-share";

const LinkedinShare = ({ data }) => {
  return (
    <LinkedinShareButton
      url={window.location.href}
      quote={data && data.title}
      className="w-full "
    >
      <div className="bg-[#007fb1] font-bold text-sm h-[32px] flex items-center text-white justify-center hover:opacity-90 ">
        <LinkedinIcon size={32} />
        Share on Linkedin
      </div>
    </LinkedinShareButton>
  );
};

export default LinkedinShare;
