import React, { useEffect, useState } from "react";
// import { dataTest } from "../utils/dataTest";
import { Link, useLocation, useParams } from "react-router-dom";
import logo from "../images/notFound.png";
import SwiperItem from "../components/swiper_slide/SwiperItem";
import { Interweave } from "interweave";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  limit,
  query,
} from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { handleChangeSecondToDate } from "../modules/handleChangeSecondToDate";
import ListCategorize from "../section/detail/ListCategorize";
import ReplyLetter from "../section/ReplyLetter";
import FacebookShare from "../components/share_btn/FacebookShare";
import LinkedinShare from "../components/share_btn/LinkedinShare";
import useGetNextBlog from "../hooks/useGetNextBlog";
import useGetPreviousBlog from "../hooks/useGetPreviousBlog";
const PostDetailPage = () => {
  const postID = useParams().id;
  const [data, setData] = useState("");
  const [popularPost, setPopularPost] = useState([]);
  const postsDb = collection(db, "posts");
  const next = useGetNextBlog(data && data);
  const previous = useGetPreviousBlog(data && data);

  useEffect(() => {
    const singleDoc = doc(db, "posts", postID);
    onSnapshot(singleDoc, (snapshot) => {
      setData({
        id: snapshot.id,
        ...snapshot.data(),
      });
    });
  }, []);
  useEffect(() => {
    const q = query(postsDb, orderBy("createdAt"), limit(4));
    onSnapshot(q, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPopularPost(posts);
    });
  }, []);

  return (
    <div className="px-10 py-8 mt-10 bg-white container-page ">
      {/* Title */}
      <h1 className="text-5xl ">{data && data.title}</h1>
      {/* Detail */}
      <div className="py-4 text-sm">
        <span className=" text-text3">By </span>
        {data && data.author}
        <span className=" text-text3">
          {"  "}--{"  "}
        </span>
        {data && handleChangeSecondToDate(data.createdAt.seconds)}
      </div>
      {/* image */}
      <img src={data.image || logo} alt="" className="w-full" />
      {/* Social share */}
      <div className="flex flex-col gap-3 py-4 xs:flex-row ">
        <FacebookShare data={data}></FacebookShare>
        <LinkedinShare data={data}></LinkedinShare>
      </div>
      {/* Content */}
      <div className="relative lg:grid lg:grid-cols-3 gap-x-5">
        <div className="col-span-2">
          <Interweave content={data && data.content} />

          {/* TAGS */}
          <div>
            <div className="tags primary">TAGS</div>
            {data &&
              data.tags &&
              data.tags.map((tag) => (
                <div className="tags" key={tag}>
                  {tag}
                </div>
              ))}
          </div>
          <hr />
          {/* NEXT AND PREVIOUS */}
          <div className="flex justify-between py-5 text-xs xs:text-sm sm:text-md gap-x-5">
            {previous && (
              <Link to={`/${previous.id}`} className="flex-1 prev-post">
                <div className="text-sm font-bold text-text3">
                  Previous Post
                </div>
                <div className="ml-2 title-list secondary">
                  {previous.title}
                </div>
              </Link>
            )}
            {next && (
              <Link to={`/${next.id}`} className="flex-1 next-post">
                <div className="text-sm font-bold text-text3">Next Post</div>
                <div className="ml-2 title-list secondary">{next.title}</div>
              </Link>
            )}
          </div>
          <hr />
          {/* Author Content */}
          <div></div>
          {/* Related Post */}
          {/* <div>
            <div className="pt-5 heading">Related Post</div>
          </div> */}
          {/* Comment */}
          <ReplyLetter></ReplyLetter>
        </div>
        <div className="sticky col-span-1">
          <div>
            <h4 className="heading">Popuar Post</h4>
            {popularPost.map((post) => (
              <SwiperItem key={post.id} data={post}></SwiperItem>
            ))}
          </div>
          <ListCategorize></ListCategorize>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
