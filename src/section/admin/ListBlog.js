import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.config";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "stt", headerName: "STT", width: 70 },
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 200 },
  { field: "categorize", headerName: "Categorize", width: 120 },
  { field: "author", headerName: "Author", width: 120 },
  // { field: "updatedAt", headerName: "Last modified", width: 200 },
  { field: "content", headerName: "Content", width: 300 },
];

function DataTable({ data }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
const ListBlog = () => {
  const dataDb = collection(db, "posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    getDocs(dataDb)
    .then((snapshot) => {
        let index = 1;
        let posts = [];
        snapshot.forEach((item) => {
          posts.push({
            ...item.data(),
            id: item.id,
            stt: index ,
          });
          index++;
        });
        setData(posts);
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data ? data : "");

  return (
    <div>
      <DataTable data={data}></DataTable>
    </div>
  );
};

export default ListBlog;
