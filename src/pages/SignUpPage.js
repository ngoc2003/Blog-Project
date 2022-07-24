import React, { useState } from "react";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import { IconEyeClose, IconEyeOpen } from "../components/icon/IconEye";
// import logo from "../../public/logo.png";
// import styled from 'styled-components';

const SignUpPage = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm();
  function handleSignUp(values) {
    console.log(values);
  }
  return (
    <div className="bg-primary h-screen flex items-center justify-center">
      <div className="container-form flex flex-col items-center">
        {/* <img className="w-[12rem]" srcSet="/logo.png 2x" alt="logo" /> */}
        <h1 className="text-4xl text-primary font-bold p-7">
          Create Your Account
        </h1>
        <form className="w-full" onSubmit={handleSignUp}>
          <Input
            control={control}
            name="fullname"
            placeholder="Enter Your Full Name . . ."
          ></Input>
          <Input
            control={control}
            name="email"
            placeholder="Enter Your Email . . ."
          ></Input>
          <Input
            type={togglePassword ? "text" : "password"}
            control={control}
            name="password"
            placeholder="Enter Your Password . . ."
            hasIcon
          >
            {togglePassword ? (
              <IconEyeOpen
                onClick={() => setTogglePassword(false)}
              ></IconEyeOpen>
            ) : (
              <IconEyeClose
                onClick={() => setTogglePassword(true)}
              ></IconEyeClose>
            )}
          </Input>

          {/* <div className="form-choose-btn flex justify-between my-4">
            <button className="border border-primary w-[48%] rounded-lg text-primary font-bold p-3 ">Cancel</button>
            <button type="submit" className="bg-primary w-[48%] rounded-lg text-white font-bold p-3 ">Sign Up</button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
