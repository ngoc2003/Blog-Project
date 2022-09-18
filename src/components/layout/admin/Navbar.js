import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Bar from "../../icon/Bar";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const NavList = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon></HomeIcon>,
  },
  {
    name: "Blog",
    path: "/admin/blog",
    icon: <MenuBookIcon></MenuBookIcon>,
  },
  {
    name: "Contact",
    path: "/admin/contact",
    icon: <AccountCircleIcon></AccountCircleIcon>,
  },
];
export default function Navbar() {
  useEffect(() => {
    setShowNavbar(JSON.parse(localStorage.getItem("showNav")));
  }, []);
  const [showNavbar, setShowNavbar] = useState("");
  function handleShowNavbar() {
    setShowNavbar(!showNavbar);
    localStorage.setItem("showNav", JSON.stringify(!showNavbar));
  }

  return (
    <div
      className={`w-[250px] bg-white flex flex-col  items-center duration-200 ease-linear overflow-hidden ${
        !showNavbar && "w-20 "
      }`}
    >
      <span
        className={` inline-flex items-center justify-center my-5 text-white duration-300 ease-linear rotate-90 rounded-full cursor-pointer w-9 h-9 bg-primary ${
          showNavbar && "rotate-0"
        }`}
        onClick={handleShowNavbar}
      >
        <Bar></Bar>
      </span>
      <div className="flex-1 w-full">
        <hr />
        {NavList.map((navItem) => (
          <>
            <NavLink
              to={navItem.path}
              key={navItem.name}
              className={({ isActive }) =>
                `flex items-center gap-x-5 justify-center py-4 font-semibold text-center transition duration-300 ease-linear cursor-pointer hover:bg-primary hover:text-white ${
                  isActive && "bg-primary text-white"
                }`
              }
            >
              {navItem.icon}
              <span className={`min-w-[60px] ${!showNavbar && "hidden"}`}>
                {navItem.name}
              </span>
            </NavLink>
            <hr />
          </>
        ))}
      </div>
    </div>
  );
}
