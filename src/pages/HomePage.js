import { signOut } from "firebase/auth";
import React from "react";
import { Button } from "../components/button";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";

const HomePage = () => {
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
    <div>
      <Header></Header>
      <Button type="button" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default HomePage;
