import React from "react";
import { dataTest } from "../utils/dataTest";
import { Link, useLocation, useParams } from "react-router-dom";
import logo from "../images/notFound.png";
import { FacebookShareButton, LinkedinShareButton } from "react-share";
import { FacebookIcon, LinkedinIcon } from "react-share";
import SwiperItem from "../components/swiper_slide/SwiperItem";

const PostDetailPage = () => {
  // const postID = useParams();
  const { state } = useLocation();
  const { data } = state;
  console.log(window.location.href);
  return (
    <div className="px-10 py-8 mt-10 bg-white rounded-lg container-page ">
      {/* Title */}
      <h1 className="text-5xl ">{data.title}</h1>
      {/* Detail */}
      <div className="py-4 text-sm">
        <span className=" text-text3">By </span>
        {data.author}
        <span className=" text-text3">
          {"  "}--{"  "}
        </span>
        {data.createdAt}
      </div>
      {/* image */}
      <img src={logo} alt="" className="w-full" />
      {/* Social share */}
      <div className="flex py-4 gap-x-3">
        <FacebookShareButton
          url={`${window.location.href}`}
          quote={`${data.title}`}
          className="w-full "
        >
          <div className="bg-[#3b5998] font-bold text-sm h-[32px] flex items-center text-white justify-center hover:opacity-90 ">
            <FacebookIcon size={32} />
            Share on Facebook
          </div>
        </FacebookShareButton>
        <LinkedinShareButton
          url={`${window.location.href}`}
          quote={`${data.title}`}
          className="w-full "
        >
          <div className="bg-[#007fb1] font-bold text-sm h-[32px] flex items-center text-white justify-center hover:opacity-90 ">
            <LinkedinIcon size={32} />
            Share on Linkedin
          </div>
        </LinkedinShareButton>
      </div>
      {/* Content */}
      <div className="relative grid grid-cols-3 gap-x-5">
        <div className="col-span-2">
          {data.content}
          {/* TAGS */}
          <div>
            <div className="tags primary">TAGS</div>
            <div className=" tags">TAGS</div>
          </div>
          <hr />
          {/* NEXT AND PREVIOUS */}
          <div className="flex justify-between py-5 gap-x-5">
            <Link to="/" className="flex-1 prev-post">
              <div className="text-sm font-bold text-text3">Previous Post</div>
              <div className="ml-2 title-list secondary">HI</div>
            </Link>
            <Link to="/" className="flex-1 next-post">
              <div className="text-sm font-bold text-text3">Next Post</div>
              <div className="ml-2 title-list secondary">HI</div>
            </Link>
          </div>
          <hr />
          {/* Author Content */}
          <div></div>
          {/* Related Post */}
          {/* <div>
            <div className="pt-5 heading">Related Post</div>
          </div> */}
          {/* Comment */}
          <div>
            <h4>Leave a Reply!</h4>
            <p>Send me any question and I will try to answer it!</p>
          </div>
        </div>
        <div className="sticky col-span-1">
          <div>
            <h4 className="heading">Popuar Post</h4>
            <SwiperItem data={data}></SwiperItem>
          </div>
          <h4 className="heading">Categories</h4>
          <div className="py-4">
            {dataTest.map((item) => (
              <Link
                to="/"
                className="flex items-center justify-between py-2 text-sm font-bold uppercase border-b hover:opacity-80 border-borderGray"
              >
                <span className="">{item?.title}</span>
                <span className="text-text3">(75)</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
