import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db, storage } from "../../lib/firebase";
import { 
  selectCollection, 
  selectCurrentUser, 
  setUser 
} from "../../store/slices/userSlice";

const useProfile = () => {
  const [photoURL, setPhotoURL] = useState(""); 
  const [error, setError] = useState("");
  const [perc, setPerc] = useState(null);
  
  const currentUser = useSelector(selectCurrentUser);
  const collection = useSelector(selectCollection);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser || !collection) return;

    const unsubUser = onSnapshot(doc(db, collection, currentUser.id), (doc) => {
      if (!doc.metadata.hasPendingWrites) return;
      dispatch(setUser({ 
        ...doc.data(), 
        createdAt: { ...doc.data().createdAt } 
      }));
    }); 

    return () => {
      unsubUser();
    };
  }, []);

  useEffect(() => {
    if (!currentUser) return;
    setPhotoURL(currentUser.photoURL);
  }, [currentUser]);
  
  const updateUserPhotoURL = async (downloadURL) => {
    if (!currentUser || !collection) return;

    try {
      await updateDoc(doc(db, collection, currentUser.id), {
        photoURL: downloadURL
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const uploadFile = (file) => {
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
          default : break;
        }
      }, 
      (error) => {
        setError(error);
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          updateUserPhotoURL(downloadURL);
        });
      }
    );
  };

  const handleFileChange = (file) => {
    if (!file) return;
    uploadFile(file);
  };

  return {
    error,
    perc,
    photoURL,
    currentUser,
    handleFileChange
  };
};

export default useProfile;