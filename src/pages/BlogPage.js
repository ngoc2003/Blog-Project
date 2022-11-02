import React from "react";
import Banner from "../components/layout/home/Banner";
import SwiperList from "../components/swiper_slide/SwiperList";
import useGetAllPost from "../hooks/useGetAllBlog";
import About from "../section/About";
const BlogPage = () => {
  const data = useGetAllPost();
  const dataBanner = data[0];
  return (
    <div className="px-10 py-8 mt-10 bg-white container-page ">
      <Banner data={dataBanner}></Banner>
      <div className="gap-5 lg:grid lg:grid-cols-3">
        <SwiperList data={data} className={"col-span-2"}></SwiperList>
        <About></About>
        </div>
      </div>

  );
};

export default BlogPage;
