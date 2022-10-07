import React from "react";
import Banner from "../components/layout/home/Banner";
import SwiperList from "../components/swiper_slide/SwiperList";
import useGetAllPost from "../hooks/useGetAllBlog";

const BlogPage = () => {
  const data = useGetAllPost();
  const dataBanner = data[0];
  return (
    <div className="px-10 py-8 mt-10 bg-white container-page ">
      <Banner data={dataBanner}></Banner>
      <SwiperList data={data}></SwiperList>
    </div>
  );
};

export default BlogPage;
