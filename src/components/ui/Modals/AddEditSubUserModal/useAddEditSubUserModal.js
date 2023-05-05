import { useEffect } from "react";
import { uploadImageAPI } from "../../../../utils/api";
import { addSubUserModal, editSubUserModal } from "../../../../configs/modals";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useImperativeHandle, useRef, useState } from "react";
import { auth, db } from "../../../../lib/firebase";
import { toast } from "react-toastify";

const initialData = {
  displayName: "",
  email: "",
  password: "",
  photoURL: "",
  permissions: [],
  type: "subUser"
};

const useAddEditSubUserModal = (type, ref) => {
  const [userData, setUserData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [editId, setEditId] = useState("");

  const [photoURL, setPhotoURL] = useState("");
  const [perc, setPerc] = useState(null);

  const ModalRef = useRef(null);

  const target = type === "add" ? addSubUserModal : editSubUserModal;

  useImperativeHandle(ref, () => {
    return {
      open: () => ModalRef.current.open(),
      close: () => {
        ModalRef.current.close();
        setUserData(initialData);
        setPhotoURL("");
        setPerc(null);
        setEditId("");
        setError("");
        setLoading(false);
      },
      editId: (id) => setEditId(id)
    }
  });

  useEffect(() => {
    if (photoURL) userData.photoURL = photoURL;
  }, [photoURL]);

  useEffect(() => {
    if (!editId) return;

    const getUserById = async () => {
      try {
        const docSnap = await getDoc(doc(db, "users", editId));

        if (docSnap.exists()) {
          setUserData(docSnap.data());
          setPhotoURL(docSnap.data().photoURL);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };

    getUserById();
  }, [editId]);

  const handleChange = (e) => {
    setUserData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const addAccountAPI = async (newAccount) => {
    const { email, password, permissions } = newAccount;

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", userCredential.user.uid), {
        ...newAccount,
        id: userCredential.user.uid,
        createdAt: serverTimestamp(),
        permissions
      });

      setError("");
      setLoading(false);
      ref.current.close();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const editAccountAPI = async (editAccount) => {
    setLoading(true);
    try {
      await updateDoc(doc(db, "users", editId), {
        ...editAccount,
      });

      setError("");
      setLoading(false);
      ref.current.close();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!photoURL) {
      setError("Photo is required");
      return;
    }

    if (type === "add") {
      addAccountAPI(userData);
    } else {

      if (userData.password.length < 6) {
        setError("Password should be at least 6 characters");
        return;
      }

      editAccountAPI(userData);
    }
  };

  const handleFileChange = (file) => {
    if (!file) return;
    uploadImageAPI({
      file,
      setError,
      setPerc,
      setPhotoURL
    });
  };

  const onChangePermissions = (e, name) => {
    if (e.target.checked) {
      setUserData({
        ...userData,
        permissions: [...userData.permissions, name]
      });
    } else {
      setUserData({
        ...userData,
        permissions: userData.permissions.filter(permission => permission !== name)
      });
    }
  };

  return {
    error,
    loading,
    perc,
    photoURL,
    ModalRef,
    userData,
    target,
    handleChange,
    handleSubmit,
    handleFileChange,
    onChangePermissions
  };
};

export default useAddEditSubUserModal;