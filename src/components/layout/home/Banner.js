import React from "react";
import logo from "../../../images/notFound.png";
import { Button } from "../../button";
import FileOpen from "../../icon/FileOpen";
import Time from "../../icon/Time";
const Banner = () => {
  return (
    <div className="min-h-[300px]  overflow-hidden  mx-auto  flex">
      <img src={logo} alt="" className="w-1/2 rounded-lg" />
      <div className="px-5 py-3">
        <div className="flex items-center h-6 py-4 text-sm gap-x-3 text-text3">
          <div className="flex items-center h-6 py-4 text-sm gap-x-3 text-text3">
            <FileOpen></FileOpen>
            <p>Architecture</p>
          </div>
          <div className="flex items-center h-6 py-4 text-sm gap-x-3 text-text3">
            <Time></Time>
            <p>March 3</p>
          </div>
        </div>
        <h4 className="text-xl font-bold text-text1">
          Remake - We Make architecture exhibition
        </h4>
        <p className="py-4 text-sm font-medium text-text3">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </p>
        <Button primary>Read more</Button>
      </div>
    </div>
  );
};

export default Banner;
