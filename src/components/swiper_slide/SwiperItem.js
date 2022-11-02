import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../images/notFound.png";
import { handleChangeSecondToDate } from "../../modules/handleChangeSecondToDate";
import FileOpen from "../icon/FileOpen";
import Time from "../icon/Time";
const SwiperItem = ({ data }) => {
  return (
    <Link to={`/${data.id}`}>
      <div className="pb-3 mx-2 mt-6 border hover-img">
        <div className="flex items-center justify-center overflow-hidden max-h-[180px] min-h-[180px]">
          <img src={data.image} alt="" className="object-cover w-full h-full "/>
        </div>
        <div className="px-4 py-3 ">
          <div className="flex items-center h-6 py-4 text-sm gap-x-3 text-text3">
            <div className="flex items-center h-6 py-4 text-sm gap-x-2 ">
              <FileOpen></FileOpen>
              <p>{data.categorize}</p>
            </div>
            <div className="flex items-center h-6 py-4 text-sm gap-x-2 ">
              <Time></Time>
              <p>{data && handleChangeSecondToDate(data.createdAt.seconds)}</p>
            </div>
          </div>
          <h4 className="text-base font-semibold overflow-text">
            {data.title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default SwiperItem;
