import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.config";
import { DataGrid } from "@mui/x-data-grid";
// import {} from '../'
// import {GetAllPost} from '../../utils/GetAllPost'
import useGetAllPost from "../../hooks/useGetAllBlog";

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
        // checkboxSelection
      />
    </div>
  );
}
const ListBlog = () => {
  const data= useGetAllPost()
  // console.log(data)

  return (
    <div>
      <DataTable data={data}></DataTable>
    </div>
  );
};

export default ListBlog;
