import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const useGetCategorize = () => {
  const dataDb = collection(db, "categorizes");

  const [categorizeList, setCategorizeList] = useState("");
  useEffect(() => {
    getDocs(dataDb)
      .then((snapshot) => {
        console.log(snapshot)
        let data = [];
        snapshot.forEach((item) => {
          console.log(item.data())
          data.push({
            ...item.data(),
          });
        });
        console.log(data)
        setCategorizeList(data[0].categorize);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return categorizeList ;
};
