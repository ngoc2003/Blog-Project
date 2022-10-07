import React from "react";
import logo from "../../../images/notFound.png";
import { Button } from "../../button";
import FileOpen from "../../icon/FileOpen";
import Time from "../../icon/Time";
import { Link } from "react-router-dom";
import useGetAllPost from "../../../hooks/useGetAllBlog";
import { handleChangeSecondToDate } from "../../../modules/handleChangeSecondToDate";
const Banner = ({ data }) => {
  return (
    <div className="min-h-[300px]  overflow-hidden  mx-auto  flex mb-5 flex-col sm:flex-row">
      <div className="flex items-center flex-1">
        <img src={data && data.image} alt="" className="object-cover w-full rounded-lg" />
      </div>
      <div className="flex-1 px-5 py-3">
        <div className="flex items-center h-6 py-4 text-sm gap-x-3 text-text3">
          <div className="flex items-center h-6 py-4 text-sm gap-x-3 text-text3">
            <FileOpen></FileOpen>
            <p>{data && data.categorize}</p>
          </div>
          <div className="flex items-center h-6 py-4 text-sm gap-x-3 text-text3">
            <Time></Time>
            <p>{handleChangeSecondToDate(data && data.createdAt.seconds)}</p>
          </div>
        </div>
        <h4 className="text-xl font-bold text-text1">{data && data.title}</h4>
        <p className="py-4 text-sm font-medium text-text3">
          {(data && data.des) || ""}
        </p>
        <Link to={`/${data && data.id}`}>
          <Button type="button" primary>
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
