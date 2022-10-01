import React from "react";
import { db } from "../firebase/firebase.config";
import { doc, updateDoc } from "firebase/firestore";
const HandleUpdateNumberCate = (list, categorize, add = 1) => {
  const handleUpdatePost = async (data) => {
    const updateData = doc(db, "categorizes", data.id);
    await updateDoc(updateData, data);
  };
  const temp = list && list.find((item) => item.name === categorize);
  if (add === 1) {
    const data = { ...temp, number: temp.number + 1 };
    handleUpdatePost(data);
  } else {
    const data = { ...temp, number: temp.number - 1 };
    handleUpdatePost(data);
  }
};

export default HandleUpdateNumberCate;
