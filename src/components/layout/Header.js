import { signOut } from "firebase/auth";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";
import { Button } from "../button";
import { toast } from "react-toastify";

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
      <div className="container-page flex justify-between items-center font-semibold">
        <a href="/" className="text-primary text-4xl">
          BLG
        </a>
        <div>
          {/* <NavLink></NavLink> */}
          {NavList.map((item) => (
            <NavLink to={item.url} className={({ isActive }) => `px-6 ${isActive && 'navbar-active'}`}>
              {item.name}
            </NavLink>
          ))}
        </div>
        <Button type="button" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Header;
