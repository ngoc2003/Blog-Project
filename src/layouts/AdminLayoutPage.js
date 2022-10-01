import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { withErrorBoundary } from "react-error-boundary";
import Navbar from "../components/layout/admin/Navbar";
import Error from "../components/Error";
import { useAuth } from "../contexts/auth-context";
import { toast } from "react-toastify";

const AdminLayoutPage = () => {
  const Navigate = useNavigate();
  const { userInfo } = useAuth();
  useEffect(() => {
    if (!userInfo) {
      toast.info("You must log in to view this page!", {
        pauseOnHover: false,
        autoClose: 2000,
      });
      setTimeout(() => {
        Navigate("/");
      }, 2000);
    }
  });

  return (
    <div className="flex h-screen overflow-hidden ">
      <Navbar></Navbar>
      <div className="flex-1 m-5 rounded-xl">
        <div className="w-full h-full p-5 overflow-y-scroll bg-white rounded-xl">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(AdminLayoutPage, { FallbackComponent: Error });
