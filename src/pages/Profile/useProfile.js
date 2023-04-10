import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImageAPI } from "../../utils/api";
import { selectCurrentUser, setUser } from "../../store/slices/userSlice";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

const useProfile = () => {
  const [photoURL, setPhotoURL] = useState("");
  const [perc, setPerc] = useState(null);
  const [error, setError] = useState("");

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.id) return;

    const unsub = onSnapshot(
      doc(db, "users", currentUser.id),
      (doc) => {
        if (!doc.metadata.hasPendingWrites) return;
        dispatch(setUser({
          ...doc.data(),
          createdAt: { ...doc.data().createdAt }
        }));
      });

    return () => unsub();
  }, []);

  useEffect(() => {
    if (!photoURL) return;

    const updateUserPhotoURL = async (photoURL) => {
      try {
        await updateDoc(doc(db, "users", currentUser.id), {
          photoURL
        });
      } catch (error) {
        setError(error.message);
      }
    };

    updateUserPhotoURL(photoURL);
  }, [photoURL]);

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  const handleFileChange = (file) => {
    if (!file) return;
    uploadImageAPI({
      file,
      setError,
      setPerc,
      setPhotoURL
    });
  };

  return {
    perc,
    photoURL,
    currentUser,
    handleFileChange
  };
};

export default useProfile;