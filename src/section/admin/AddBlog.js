import React, { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "../../components/button";
import { Formik, Form, Field } from "formik";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as Yup from "yup";
import handleUploadImage from "../../modules/HandleUploadImage";
import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useGetCategorize } from "../../hooks/useGetCategorize";
// import ImageUploader from "react-quill-image-uploader";
// Quill.register("modules/imageUploader", ImageUploader);
// var quillObj;

const AddBlog = () => {
  const [imagePreview, setImagePreview] = useState("");
  const [url, setUrl] = useState("");
  const [categorize, setCategorize] = useState("");
  const dataDb = collection(db, "posts");
  const categorizeList = useGetCategorize();
  // console.log(categorizeList)
  const handleChange = (event) => {
    setCategorize(event.target.value);
  };

  const handleSubmit = async (obj) => {
    if (!obj) return null;
    try {
      let tags = obj.tags;
      try {
        tags = obj.tags.split(" ");
      } catch (err) {
        console.log(err);
      }

      console.log({
        ...obj,
        imageName: imagePreview && imagePreview.name ? imagePreview.name : "",
        image: url ? url : "",
        tags: tags,
      });
      addDoc(dataDb, {
        ...obj,
        categorize: categorize ? categorize : "other",
        imageName: imagePreview && imagePreview.name ? imagePreview.name : "",
        image: url ? url : "",
        tags: tags,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
        .then(() => {
          toast.success("Add New Blog Success", {
            pauseOnHover: false,
            autoClose: 2000,
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        })
        .catch((err) => {
          toast.error("Add New Blog Failed", {
            pauseOnHover: false,
            autoClose: 2000,
          });
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
        [{ color: ["#FFFFFF", "#e60000"] }],
        ["code-block"],
      ],
    }),
    []
  );

  function handlePreviewImage(e) {
    const file = e.target.files[0];
    file.preview = URL.revokeObjectURL(file);
    setImagePreview(file);
  }
  useEffect(() => {
    return () => {
      imagePreview && URL.revokeObjectURL(imagePreview.preview);
    };
  }, [imagePreview]);
  return (
    <Formik
      initialValues={{
        title: "",
        content: "",
        tags: "",
        author: "Bui Ngoc",
        image: "",
      }}
      validationSchema={Yup.object({
        // categorize: Yup.string().required().oneOf(["Event", "Blog"]),
        title: Yup.string().required("Vui Lòng Điền Trường Này"),
        content: Yup.string().required("Vui Lòng Điền Trường Này"),
      })}
      onSubmit={(values) => {
        // handleSubmit(values);
        // console.log(values);
      }}
    >
      {({ errors, touched, setFieldValue }) => {
        return (
          <Form className="w-full">
            <div className="flex w-full gap-x-5">
              <div className="field">
                <Field name="title">
                  {({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Title"
                      variant="outlined"
                      placeholder="Enter Your Title Post . . ."
                      value={field.value}
                      onChange={field.onChange(field.name)}
                      className="w-full"
                    />
                  )}
                </Field>
              </div>
              <div className="field">
                <Field name="tags">
                  {({ field }) => (
                    <TextField
                      id="outlined-basic"
                      label="Tags"
                      variant="outlined"
                      placeholder="Enter Your Tags Post . . ."
                      value={field.value}
                      onChange={field.onChange(field.name)}
                      className="w-full"
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className="field">
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel>Categorize</InputLabel>
                  <Select
                    value={categorize}
                    label="Categorize"
                    onChange={handleChange}
                  >
                    {categorizeList &&
                      categorizeList.length > 0 &&
                      categorizeList.map((item) => (
                        <MenuItem key={item.name} value={item.name}>
                          {item.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <div className="field">
              <Field
                render={({ field }) => {
                  return (
                    <>
                      <input
                        type="file"
                        onChange={(e) => {
                          setFieldValue("image", e.target.files[0]);
                          handlePreviewImage(e);
                          handleUploadImage(
                            "images",
                            e.target.files[0],
                            setUrl
                          );
                        }}
                      />
                    </>
                  );
                }}
              />
              {imagePreview && (
                <div className="flex items-center justify-center p-5 border">
                  <img src={imagePreview.preview} alt="" width="300px" />
                </div>
              )}
            </div>

            <div className="field">
              <Field name="content">
                {({ field }) => (
                  <ReactQuill
                    theme="snow"
                    modules={modules}
                    value={field.value}
                    onChange={field.onChange(field.name)}
                  />
                )}
              </Field>
            </div>
            <Button primary type="submit">
              Add a new Blog
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddBlog;
