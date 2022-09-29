import React, { useEffect, useState } from "react";
// import { dataTest } from "../utils/dataTest";
import { Link, useLocation, useParams } from "react-router-dom";
import logo from "../images/notFound.png";
import SwiperItem from "../components/swiper_slide/SwiperItem";
import { Interweave } from "interweave";
import {
  collection,
  addDoc,
  deleteDoc,
  getDocs,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  getDoc,
  where,
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
const PostDetailPage = () => {
  const postID = useParams().id;
  const [data, setData] = useState("");
  const [popularPost, setPopularPost] = useState([]);
  const postsDb = collection(db, "posts");

  useEffect(() => {
    const singleDoc = doc(db, "posts", postID);
    onSnapshot(singleDoc, (snapshot) => {
      setData(snapshot.data());
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
    <div className="px-10 py-8 mt-10 bg-white rounded-lg container-page ">
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
      <div className="flex py-4 gap-x-3">
        <FacebookShare data={data}></FacebookShare>
        <LinkedinShare data={data}></LinkedinShare>
      </div>
      {/* Content */}
      <div className="relative grid grid-cols-3 gap-x-5">
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
