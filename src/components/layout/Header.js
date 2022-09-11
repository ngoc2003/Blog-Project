import { signOut } from "firebase/auth";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { Button } from "../button";
import { toast } from "react-toastify";
import { Input } from "../input";
import { GrSearch } from "react-icons/gr";

const NavList = [
  {
    url: "/",
    name: "HOME",
  },
  {
    url: "/blog",
    name: "BLOG",
  },
  {
    url: "/contact",
    name: "CONTACT",
  },
];

const Header = () => {
  const navigate = useNavigate();

  function handleSignOut() {
    signOut(auth);
    toast.success("Đăng xuất thành công", {
      pauseOnHover: false,
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate("/sign-in");
    }, 2000);
  }
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between font-semibold container-page">
        <a href="/" className="text-4xl text-primary">
          BLG
        </a>
        <div>
          {NavList.map((item) => (
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
          <Input
            placeholder="Search here . . ."
            className={"py-1.5 rounded-lg"}
          >
            <GrSearch></GrSearch>
          </Input>
          {/* <div>
            <Button primary type="button" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div> */}
      </div>
    </div>
  );
};

export default Header;
