import React from 'react';
import useGetAllPost from './useGetAllBlog';

const useGetNextBlog = (blog) => {
    const data = useGetAllPost();
    let index = data.findIndex((item) => item.id === blog.id);
  return index !== 0 ? data[index - 1] : '';

};

export default useGetNextBlog;