import React from 'react';
import Chat from '../components/icon/Chat'
import avatar from '../images/avatar.jpg'
const About = () => {
    return (
        <div className="col-span-1">
          <div>
            <h4 className="heading">About me</h4>
            <div className="flex flex-col items-center gap-5 my-5">
              <img
                src={avatar}
                alt=""
                className="w-[300px] h-[300px] rounded-full object-cover"
              />
              <div className="flex flex-col gap-3 font-semibold">
                <p className="pb-3 text-xl text-center border-b border-b-primary ">
                  Bui Ngoc
                </p>
                <p className="text-primary">
                  Sophomore student at Thuy Loi university
                </p>
                <p className="italic">
                  "I love cat, love red and have a dream of becoming an active
                  and knowledge frontend developer"
                </p>
                <p className="text-primary">
                  Read my CV online {"->"}{" "}
                  <a
                    href="https://cvonline-buingoc.vercel.app/"
                    className="italic hover:underline"
                  >
                    Here
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="heading">My maxim live</h4>
            <p className="flex gap-5 my-5">
              <Chat className={"text-gray-700"}></Chat>
              <p>
                Nothing is too small to know, and nothing is too big to try !
              </p>
            </p>
          </div>
          
          </div>
    );
};

export default About;