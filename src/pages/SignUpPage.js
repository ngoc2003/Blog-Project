import React, { useEffect, useState } from "react";
import { IconEyeClose, IconEyeOpen } from "../components/icon/IconEye";
import { Button } from "../components/button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import AuthenticationPage from "./AuthenticationPage";

const SignUpPage = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Sign Up";
  }, []);
  async function handleSignUp(values) {
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, {
      displayName: values.fullName,
    });
    toast.success("Đăng kí thành công", {
      pauseOnHover: false,
      autoClose: 2000,
    });
    const collectionRef = collection(db, "users");
    await addDoc(collectionRef, {
      fullName: values.fullName,
      email: values.email,
      password: values.password,
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <AuthenticationPage title={"Create Your Account"}>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().required("Vui Lòng Điền Trường Này"),
          email: Yup.string()
            .email("E-mail của bạn không hợp lệ")
            .required("Vui Lòng Điền Trường Này"),
          password: Yup.string()
            .min(6, "Tối thiểu 6 kí tự")
            .required("Vui Lòng Điền Trường Này"),
        })}
        onSubmit={(values) => {
          handleSignUp(values);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form className="w-full">
              <div className="field">
                <Field
                  className="input"
                  name="fullName"
                  placeholder="Enter Your Full Name . . ."
                ></Field>
                {errors.fullName && touched.fullName && (
                  <div className="errorMessage">{errors.fullName}</div>
                )}
              </div>
              <div className="field">
                <Field
                  className="input"
                  name="email"
                  placeholder="Enter Your Email . . ."
                ></Field>
                {errors.email && touched.email && (
                  <div className="errorMessage">{errors.email}</div>
                )}
              </div>
              <div className="field">
                <Field
                  type={togglePassword ? "text" : "password"}
                  className="input"
                  name="password"
                  placeholder="Enter Your Password . . ."
                ></Field>
                <span className="icon-input">
                  {togglePassword ? (
                    <IconEyeOpen
                      onClick={() => setTogglePassword(false)}
                    ></IconEyeOpen>
                  ) : (
                    <IconEyeClose
                      onClick={() => setTogglePassword(true)}
                    ></IconEyeClose>
                  )}
                </span>
                {errors.password && touched.password && (
                  <div className="errorMessage">{errors.password}</div>
                )}
              </div>
              <div className="text-right">
                Bạn đã có tài khoản?{" "}
                <a href="/sign-in" className="cursor-pointer text-primary ">
                  Đăng nhập
                </a>
              </div>
              <Button primary type="submit" fluid={true}>
                Sign Up
              </Button>
            </Form>
          );
        }}
      </Formik>
    </AuthenticationPage>
  );
};

export default SignUpPage;
