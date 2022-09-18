import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { Button } from "../button";
import { toast } from "react-toastify";
import { Input } from "../input";
import { GrSearch } from "react-icons/gr";
import ArrowUp from "../icon/ArrowUp";

const HeaderList = [
  {
    url: "/",
    name: "HOME",
  },
  {
    url: "/blog",
    name: "BLOG",
  },
];
function handleScrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
const Header = () => {
  // const navigate = useNavigate();
  // function handleSignOut() {
  //   signOut(auth);
  //   toast.success("Đăng xuất thành công", {
  //     pauseOnHover: false,
  //     autoClose: 2000,
  //   });
  //   setTimeout(() => {
  //     navigate("/sign-in");
  //   }, 2000);
  // }
  const [scroll, setScroll] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset >= 100 ? setScroll(true) : setScroll(false);
  });
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between font-semibold container-page">
        <Link to="/" className="text-4xl text-primary">
          BLG
        </Link>
        <div>
          {HeaderList.map((item) => (
            <NavLink
              key={item.name}
              to={item.url}
              className={({ isActive }) =>
                `px-6 ${isActive && "navbar-active"}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <Input placeholder="Search here . . ." className={"py-1.5 rounded-lg"}>
          <GrSearch></GrSearch>
        </Input>
        {/* <div>
            <Button primary type="button" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div> */}
      </div>

      <div
        className={`fixed flex items-center justify-center duration-500 linear bg-white rounded-full shadow-lg cursor-pointer w-14 h-14 text-primary opacity-80 right-5  ${
          scroll ? "bottom-5" : "-bottom-full"
        }`}
        onClick={handleScrollTop}
      >
        <ArrowUp></ArrowUp>
      </div>
    </div>
  );
};

export default Header;
