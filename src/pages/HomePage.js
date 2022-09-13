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
import { dataTest } from "../utils/dataTest";


const HomePage = () => {
  return (
    <div className="px-10 py-8 mt-10 bg-white rounded-lg container-page ">
      <Banner></Banner>
      {dataTest.map((data) => (
        <SwiperList list={data}></SwiperList>
      ))}
    </div>
  );
};

export default HomePage;
