import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";
import { withErrorBoundary } from "react-error-boundary";
import Navbar from "../components/layout/admin/Navbar";
import Error from "../components/Error";


const AdminLayoutPage = () => {
  return (
    <div className="flex h-screen overflow-hidden ">
      <Navbar></Navbar>
      <div className="flex-1 m-5  rounded-xl">
        <div className="w-full h-full p-5 bg-white overflow-y-scroll rounded-xl">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(AdminLayoutPage, { FallbackComponent: Error });
