import React from "react";
import { Link } from "react-router-dom";
import { useGetCategorize } from "../../hooks/useGetCategorize";

const ListCategorize = () => {
    const categorize = useGetCategorize();
    
  return (
    <>
      <h4 className="heading">Categories</h4>
      <div className="py-4">
        {categorize &&
          categorize.length>0 &&
          categorize.map((item) => (
            <Link
              to="/"
              className="flex items-center justify-between py-2 text-sm font-bold uppercase border-b hover:opacity-80 border-borderGray"
            >
              <span className="">{item?.name}</span>
              <span className="text-text3">{item.number}</span>
            </Link>
          ))}
      </div>
    </>
  );
};

export default ListCategorize;
