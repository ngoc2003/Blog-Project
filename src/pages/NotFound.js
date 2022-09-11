import React from "react";
import { Button } from "../components/button";
import notFound from "../images/notFound.png";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div className="shadow-lg w-[350px] overflow-hidden h-[350px] bg-white flex items-center justify-center rounded-full text-4xl font-semibold">
        Page Not Found
        {/* <img src={notFound} alt="" width={'100%'} /> */}
      </div>
      <Button type="button" onClick={() => navigate("/")} secondary className='hover:scale-110 transition duration-300'>
        Back To Homepage
      </Button>
    </div>
  );
};

export default NotFound;
