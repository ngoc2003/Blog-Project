import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import db from "../firebase/firebase.config";

const storage = getStorage();

const handleUploadImage = (path, image, setImg = () => {}) => {
  if (!image) {
    console.log("No Image");
    return "";
  } else if (image) {
    image.preview = URL.createObjectURL(image);
    const file = image;
    const storageRef = ref(storage, path+'/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            console.log("Nothing");
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImg(downloadURL);
        });
      }
    );
  }
};

export default handleUploadImage;
