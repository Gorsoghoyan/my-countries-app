import { useEffect, useImperativeHandle, useState } from "react";
import { addCountryModal, editCountryModal } from "../../../../configs/modals";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { uploadImageAPI } from "../../../../utils/api";
import { db } from "../../../../lib/firebase";

const initialData = {
  name: { common: "" },
  flags: { png: "" },
  capital: "",
  region: "",
  population: null
};

const useAddEditCountryModal = (type, editIdRef, modalRef) => {
  const [data, setData] = useState(initialData);
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [perc, setPerc] = useState(null);
  const [id, setId] = useState("");

  const target = type === "add" ? addCountryModal : editCountryModal;

  useEffect(() => {
    if (!id) return;
    const getCountry = async () => {
      setLoading(true);
      try {
        const snap = await getDoc(doc(db, "country", id));

        if (snap.exists()) {
          setData(snap.data());
        } else {
          setError("such a country does not yet exist");
          setLoading(false);
          return;
        }

        setError("");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    getCountry()
  }, [id]);

  useImperativeHandle(editIdRef, () => {
    return {
      setId: (id) => setId(id),
      reset: () => {
        setData(initialData);
        setId("");
        setError("");
        setPerc(null);
        setLoading(false);
        setPhotoURL("");
      }
    };
  });

  const addCountry = async () => {
    try {
      await addDoc(collection(db, "country"), {
        ...data,
        flags: { png: photoURL },
        isChecked: false
      });

      setError("");
      setLoading(false);

      modalRef.current.close();
      modalRef.current.reset();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const editCountry = async (id) => {
    try {
      await updateDoc(doc(db, "country", id), {
        ...data
      });

      setError("");
      setLoading(false);

      modalRef.current.close();
      modalRef.current.reset();
    } catch (error) {
      console.log(error.message)
      setLoading(false);
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (type === "add") {
      addCountry();
    } else {
      editCountry(id);
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

  const handleInputChange = (e, special) => {
    const { name, value } = e.target;

    if (special) {
      setData({ ...data, name: { ...data.name, common: value } });
      return;
    }

    setData({ ...data, [name]: value });
  };

  return {
    error,
    loading,
    perc,
    target,
    photoURL,
    data,
    handleFileChange,
    handleInputChange,
    handleSubmit
  };
};

export default useAddEditCountryModal;