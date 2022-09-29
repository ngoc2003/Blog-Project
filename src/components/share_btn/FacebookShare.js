import React from "react";
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";

const FacebookShare = ({ data }) => {
  return (
    <FacebookShareButton
      url={window.location.href}
      quote={data && data.title}
      hashtag={"#BuiNgoc"}
      descriotion={data && data.des}
      className="w-full "
    >
      <div className="bg-[#3b5998] font-bold text-sm h-[32px] flex items-center text-white justify-center hover:opacity-90 ">
        <FacebookIcon size={32} />
        Share on Facebook
      </div>
    </FacebookShareButton>
  );
};

export default FacebookShare;
