import React from "react";
import logo from "../../images/notFound.png";
import FileOpen from "../icon/FileOpen";
import Time from "../icon/Time";
const SwiperItem = ({ data }) => {
  return (
    <div className="py-3">
      <img src={logo} alt="" className="rounded-xl " />
      <div className="px-4 py-3">
        <div className="flex items-center h-6 py-4 text-sm gap-x-3 text-text3">
          <div className="flex items-center h-6 py-4 text-sm gap-x-3 ">
            <FileOpen></FileOpen>
            <p>{data.categorize}</p>
          </div>
          <div className="flex items-center h-6 py-4 text-sm gap-x-3 ">
            <Time></Time>
            <p>{data.createdAt}</p>
          </div>
        </div>
        <h4 className="text-base font-semibold overflow-text">{data.title}</h4>
      </div>
    </div>
  );
};

export default SwiperItem;
