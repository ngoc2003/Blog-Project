import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase.config";

export default function useGetAllPost () {
  const dataDb = collection(db, "posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    getDocs(dataDb)
      .then((snapshot) => {
        let index = 1;
        let posts = [];
        snapshot.docs.forEach((item) => {
          posts.push({
            ...item.data(),
            id: item.id,
            stt: index,
          });
          index++;
        });
        setData(posts);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  return data ? data : "";
};

