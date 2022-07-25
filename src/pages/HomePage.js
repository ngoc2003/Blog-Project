import { signOut } from "firebase/auth";
import React from "react";
import { Button } from "../components/button";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";

const HomePage = () => {
  
  return (
    <div>
      <Header></Header>
      
    </div>
  );
};

export default HomePage;
