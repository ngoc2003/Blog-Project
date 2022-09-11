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
const dataTest = [
  {
    id: 1,
    title:
      "Building Hope Village Building Hope Village Building Hope Village Building Hope Village Building Hope Village Building Hope Village",
    createdAt: "2022-05-05",
    categorize: "Architecture",
  },
  {
    id: 2,
    categorize: "Architecture",
    title:
      "Building Hope Village Building Hope Village Building Hope Village Building Hope Village Building Hope Village Building Hope Village",
    createdAt: "2022-05-05",
  },
  {
    id: 3,
    categorize: "Architecture",
    title:
      "Building Hope Village Building Hope Village Building Hope Village Building Hope Village Building Hope Village Building Hope Village",
    createdAt: "2022-05-05",
  },
  {
    id: 4,
    categorize: "Architecture",
    title:
      "Building Hope Village Building Hope Village Building Hope Village Building Hope Village Building Hope Village Building Hope Village",
    createdAt: "2022-05-05",
  },
  {
    id: 5,
    categorize: "Architecture",
    title:
      "Building Hope Village Building Hope Village Building Hope Village Building Hope Village Building Hope Village Building Hope Village",
    createdAt: "2022-05-05",
  },
];

const HomePage = () => {
  return (
    <div className="px-10 py-8 mt-10 bg-white rounded-lg container-page">
      <Banner></Banner>
      <SwiperList data={dataTest}></SwiperList>
    </div>
  );
};

export default HomePage;
