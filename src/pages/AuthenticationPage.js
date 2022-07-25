import React from "react";

const AuthenticationPage = ({ title, children }) => {
  return (
    <div className="bg-primary h-screen flex items-center justify-center">
      <div className="container-form flex flex-col items-center">
        <h1 className="text-4xl text-primary font-bold p-7">{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default AuthenticationPage;
