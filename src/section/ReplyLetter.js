import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Button } from "../components/button";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const ReplyLetter = () => {
  const sendEmail = (values) => {
    emailjs
      .send(
        "service_eq29oeo",
        "template_3w694di",
        { ...values },
        "yLnGxGuLtmTUx5rej"
      )
      .then(
        (result) => {
          toast.success("Send Mail Successfully", {
            pauseOnHover: false,
            autoClose: 2000,
          });
        },
        (error) => {
          toast.error("Send Mail Unsuccessfully", {
            pauseOnHover: false,
            autoClose: 2000,
          });
          console.log(error);
        }
      );
  };
  return (
    <div>
      <h4 className="my-4 text-3xl font-bold">Leave a Reply!</h4>
      <p>Send me any question and I will try to answer it!</p>
      <Formik
        initialValues={{
          email: "",
          name: "",
          message: "",
          website: window.location.href,
        }}
        onSubmit={(values) => {
          sendEmail(values);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form className="w-full">
              <div className="flex flex-col field gap-x-5 gap-y-5 xs:flex-row">
                <Field
                  className="input"
                  name="email"
                  placeholder="Your Email . . ."
                ></Field>

                <Field
                  className="input"
                  name="name"
                  placeholder="Your Name . . ."
                ></Field>
              </div>
              <Field
                className="input"
                name="message"
                as="textarea"
                rows={4}
                placeholder="Your Message . . ."
              ></Field>
              <Button primary type="submit" fluid={true}>
                Send
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ReplyLetter;
