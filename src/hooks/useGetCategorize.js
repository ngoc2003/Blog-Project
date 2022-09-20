import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const useGetCategorize = () => {
  const dataDb = collection(db, "blogs");

  const [categorizeList, setCategorizeList] = useState("");
  useEffect(() => {
    getDocs(dataDb)
      .then((snapshot) => {
        let data = [];
        snapshot.forEach((item) => {
          data.push({
            ...item.data(),
            id: item.id,
          });
        });
        setCategorizeList(data[0].categorize);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return categorizeList ;
};
