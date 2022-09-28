import { signOut } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase.config";
import { Button } from "../button";
import { toast } from "react-toastify";
import { Input } from "../input";
import { GrSearch } from "react-icons/gr";
import ArrowUp from "../icon/ArrowUp";
import useDebounce from "../../hooks/useDebounce";
import useGetAllPost from "../../hooks/useGetAllBlog";
import { handleChangeSecondToDate } from "../../modules/handleChangeSecondToDate";
import FileOpen from "../icon/FileOpen";
import Time from "../icon/Time";

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
  const [filter, setFilter] = useState("");
  const filterDebounce = useDebounce(filter, 500);
  // const dataDb = collection(db, "posts");
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [data, setData] = useState([]);
  const dataAll = useGetAllPost();
  useEffect(() => {
    if (filterDebounce) {
      const temp = dataAll.filter((item) => {
        if (item.title.toLowerCase().includes(filterDebounce.toLowerCase())) {
          return item;
        }
      });
      setData(temp);
    } else {
      setData([]);
    }
  }, [filterDebounce]);

  const [scroll, setScroll] = useState(false);
  function handleChange(e) {
    setFilter(e.target.value);
  }

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
        <div className="relative ">
          <Input
            placeholder="Search here . . ."
            className={"py-1.5 rounded-lg relative"}
            onChange={handleChange}
            hasFocus={setShowSearchResult}
          >
            <GrSearch></GrSearch>
          </Input>
          <div
            className={`absolute top-14 mt-4 -left-1/2 -right-4 z-20 flex-col  h-auto bg-white border shadow-2xl min-h-[100px] rounded-lg p-3 ${
              showSearchResult ? "flex" : "hidden"
            } items-center justify-center`}
          >
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <Link to={`/blog/${item.id}`}>
                  {index !== 0 && <hr className="my-3" />}
                  <div className="flex gap-4 hover-img" key={item.id}>
                    <div className="flex-1 object-cover overflow-hidden">
                      <img src={item.image} alt="" className="w-full" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center h-6 py-4 text-sm gap-x-3 text-text3">
                        <div className="flex items-center h-6 py-4 text-sm gap-x-2 ">
                          <FileOpen></FileOpen>
                          <p>{item.categorize}</p>
                        </div>
                        <div className="flex items-center h-6 py-4 text-sm gap-x-2 ">
                          <Time></Time>
                          <p>
                            {item &&
                              handleChangeSecondToDate(item.createdAt.seconds)}
                          </p>
                        </div>
                      </div>
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="font-medium text-center text-text3">
                No result is founded !
              </div>
            )}
          </div>
        </div>
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
