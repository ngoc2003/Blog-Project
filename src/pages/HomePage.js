import { signOut } from "firebase/auth";
import React from "react";
import { Button } from "../components/button";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Banner from "../components/layout/home/Banner";
import SwiperItem from "../components/swiper_slide/SwiperItem";
import SwiperList from "../components/swiper_slide/SwiperList";
// import { GetAllPost } from "../utils/GetAllPost";
import useGetAllPost from "../hooks/useGetAllBlog";
// import { dataTest } from "../utils/dataTest";

const HomePage = () => {
  const data = useGetAllPost();
  // console.log(data)
  // const dataBanner = data && data.length > 0 ? data[0] : "";
  const dataBanner = data[0]
  // console.log(data ? data : "");
  return (
    <div className="px-10 py-8 mt-10 bg-white rounded-lg container-page ">
      <Banner data={dataBanner}></Banner>
      <SwiperList data={data}></SwiperList>
    </div>
  );
};

export default HomePage;
