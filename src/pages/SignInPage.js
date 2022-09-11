import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import AuthenticationPage from "./AuthenticationPage";
import { IconEyeClose, IconEyeOpen } from "../components/icon/IconEye";
import { Button } from "../components/button";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const SignInPage = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);

  async function handleSignIn(values) {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      toast.success("Đăng nhập thành công", {
        pauseOnHover: false,
        autoClose: 2000,
      });
      console.log(userInfo)
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      toast.error("Please check your email and password");
    }
  }
  useEffect(() => {
    document.title = "Sign In";
    if (userInfo?.email) navigate("/");
  }, []);
  return (
    <div>
      <AuthenticationPage title={"Sign In"}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("E-mail của bạn không hợp lệ")
              .required("Vui Lòng Điền Trường Này"),
            password: Yup.string()
              .min(6, "Tối thiểu 6 kí tự")
              .required("Vui Lòng Điền Trường Này"),
          })}
          onSubmit={(values) => {
            handleSignIn(values);
          }}
        >
          {({ errors, touched }) => {
            return (
              <Form className="w-full">
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
                {/* <div className="text-right">
                  Bạn chưa có tài khoản?{" "}
                  <a href="/sign-up" className="cursor-pointer text-primary ">
                    Đăng kí
                  </a>
                </div> */}
                <Button primary type="submit" fluid={true}>
                  Sign In
                </Button>
              </Form>
            );
          }}
        </Formik>
      </AuthenticationPage>
    </div>
  );
};

export default SignInPage;
