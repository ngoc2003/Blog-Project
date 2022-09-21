import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.config";
import { DataGrid } from "@mui/x-data-grid";
// import {} from '../'
// import {GetAllPost} from '../../utils/GetAllPost'
import useGetAllPost from "../../hooks/useGetAllBlog";
import { toast } from "react-toastify";

const columns = [
  { field: "stt", headerName: "STT", width: 70 },
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "Title", width: 200 },
  { field: "categorize", headerName: "Categorize", width: 120 },
  { field: "author", headerName: "Author", width: 120 },
  // { field: "updatedAt", headerName: "Last modified", width: 200 },
  { field: "content", headerName: "Content", width: 300 },
];
async function handleDeleTePost(postId) {
  const deleteData = doc(db, "posts", postId);
  await deleteDoc(deleteData);
  toast.success(`Remove Blog Id-${postId} Success`, {
    pauseOnHover: false,
    autoClose: 2000,
  });
}

function DataTable({ data }) {
  const [deleteButton, setShowDeleteButton] = useState(false);
  const [deleteList, setDeleteList] = useState([])
  const onRowsSelectionHandler = (ids) => {
    const selectedRowsData = ids.map((id) => data.find((row) => row.id === id));
    if (selectedRowsData.length > 0) {
      setShowDeleteButton(true);
    } else {
      setShowDeleteButton(false);
    }
    setDeleteList(selectedRowsData)
  };
  return (
    <div className="w-full h-[400px] relative ">
      <div
        className={`w-[60px] h-[60px] bg-primary flex justify-center items-center text-white font-semibold rounded-full absolute z-10 -bottom-5 left-1/2 -translate-x-1/2 hover:opacity-90 cursor-pointer duration-200 ease-linear ${
          deleteButton
            ? "opacity-80 pointer-events-auto"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => {
          deleteList.forEach((item) => {
            handleDeleTePost(item.id);
          });
        }}
      >
        Delete
      </div>
      <DataGrid
        rows={data}
        onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
const ListBlog = () => {
  const data = useGetAllPost();
  // console.log(data)

  return (
    <div>
      <DataTable data={data}></DataTable>
    </div>
  );
};

export default ListBlog;
