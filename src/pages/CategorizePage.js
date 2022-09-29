import React from "react";
import { useParams } from "react-router-dom";
import SwiperItem from "../components/swiper_slide/SwiperItem";
import useGetAllPost from "../hooks/useGetAllBlog";

const CategorizePage = () => {
  const { categorizeName } = useParams();
  const posts = useGetAllPost();
  const data =
    posts && posts.length > 0
      ? posts.filter((item) => item.categorize === categorizeName)
      : "";
  return (
    <div className="px-10 py-8 mt-10 bg-white rounded-lg container-page ">
      <h1 className="text-5xl text-text3">
        Find {data.length} {data.length > 1 ? "results" : "result"} for '
        {categorizeName}'
      </h1>
      <hr className='my-5'/>
      <div className="grid grid-cols-4">
        {data && data.length > 0 ? data.map( item => (
            <SwiperItem data={item} key={item.id}></SwiperItem>
        )) : <p className="text-text3">Please try other tag instead!</p>}
      </div>
    </div>
    
  );
};

export default CategorizePage;
