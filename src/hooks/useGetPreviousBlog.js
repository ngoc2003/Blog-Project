import React from "react";
import useGetAllPost from "./useGetAllBlog";

const useGetPreviousBlog = (blog) => {
  const data = useGetAllPost();
  let index = data.findIndex((item) => item.id === blog.id);
//   return index
return index !== data.length ? data[index + 1] : '';

};

export default useGetPreviousBlog;
