import React from "react";
import { Button } from "../../components/button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const AddBlog = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        categorize: "",
        content: "",
        tags: "",
        author: "Bui Ngoc",
      }}
      validationSchema={Yup.object({
        // title: Yup.string()
        //   .required("Vui Lòng Điền Trường Này"),
        // content: Yup.string()
        //   .required("Vui Lòng Điền Trường Này"),
        // categorize: Yup.string()
        //   .required("Vui Lòng Điền Trường Này"),
      })}
      onSubmit={(values) => {
        // handleSignIn(values);
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form className="w-full">
            <div className="flex w-full gap-x-5">
              <div className="field">
                <Field
                  className="input"
                  name="title"
                  placeholder="Enter Your Title Post . . ."
                ></Field>
                {/* {errors.email && touched.email && (
                <div className="errorMessage">{errors.email}</div>
              )} */}
              </div>
              <div className="field">
                <Field
                  className="input"
                  name="tags"
                  placeholder="Enter Your Tags Post . . ."
                ></Field>
                {/* {errors.email && touched.email && (
                <div className="errorMessage">{errors.email}</div>
              )} */}
              </div>
            </div>
            <div className="field">
              <Field
                className="input"
                name="content"
                as="textarea"
                rows={5}
                placeholder="Enter Your Content Post . . ."
              ></Field>
              {/* {errors.email && touched.email && (
                <div className="errorMessage">{errors.email}</div>
              )} */}
            </div>
            <Button primary type="submit" fluid={true}>
              Sign In
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddBlog;
