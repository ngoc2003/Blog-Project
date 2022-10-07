import React from "react";

import useGetAllPost from "../hooks/useGetAllBlog";

const ContactPage = () => {
  const data = useGetAllPost();
  return (
    <div className="px-10 py-8 mt-10 bg-white container-page text-third ">
      <span className="text-6xl font-bold uppercase ">
        Bùi <span className="text-primary">Ngọc</span>
      </span>
      <div className="mt-5 font-medium opacity-90">
        I'm 19 years old and now studying at Thuy Loi university as a{" "}
        <span className="font-bold text-primary">Sophomore student</span>. <br /> When i
        was 11, I always had a dream of{" "}
        <span className="font-bold text-primary">creating beautiful websites</span>. So I
        study IT, pursued my passion for web development. Learing programming is
        not easy as I though, especially when you have to learn it with{" "}
        <span className="font-bold text-primary">
          no family support and pure experience with computers
        </span>
        . But after 8 months of{" "}
        <span className="font-bold text-primary">self-taught programming</span>, overcome
        many difficulties and obstances, I have gained a little knowledge and
        achievement. <br />
        Become a <span className="font-bold text-primary">web developer</span> is my
        dream, and I will continue to work as hard as I can to achive it.
      </div>
      <div className="font-bold text-primary">. . . .</div>
    </div>
  );
};

export default ContactPage;
