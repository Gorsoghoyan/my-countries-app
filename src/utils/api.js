import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../lib/firebase";

export const uploadImageAPI = ({
  file, 
  setError,
  setPerc,
  setPhotoURL
}) => {
  const name = new Date().getTime() + file.name;
  const storageRef = ref(storage, name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setPerc(progress);
      switch (snapshot.state) {
        case 'paused':
          break;
        case 'running':
          break;
        default: break;
      }
    },
    (error) => {
      setError(error.message);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setError("");
        setPhotoURL(downloadURL);
      });
    }
  );
}