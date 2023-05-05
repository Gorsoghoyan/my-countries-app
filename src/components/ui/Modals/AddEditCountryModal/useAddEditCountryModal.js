import { useEffect } from "react";
import { uploadImageAPI } from "../../../../utils/api";
import { addCountryModal, editCountryModal } from "../../../../configs/modals";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { useImperativeHandle, useRef, useState } from "react";
import { db } from "../../../../lib/firebase";
import { toast } from "react-toastify";

const initialData = {
  name: { common: "" },
  flags: { png: "" },
  capital: [""],
  region: "",
  area: "",
  population: null,
};

const useAddEditCountryModal = (type, ref) => {
  const [countryData, setCountryData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [editId, setEditId] = useState("");

  const [photoURL, setPhotoURL] = useState("");
  const [perc, setPerc] = useState(null);

  const ModalRef = useRef(null);

  const target = type === "add" ? addCountryModal : editCountryModal;

  useImperativeHandle(ref, () => {
    return {
      open: () => ModalRef.current.open(),
      close: () => {
        ModalRef.current.close();
        setCountryData(initialData);
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
    if (photoURL) countryData.flags.png = photoURL;
  }, [photoURL]);

  useEffect(() => {
    if (!editId) return;
    console.log(editId);
    const getCountryById = async () => {
      try {
        const docSnap = await getDoc(doc(db, "countries", editId));

        if (docSnap.exists()) {
          setCountryData(docSnap.data());
          setPhotoURL(docSnap.data().flags.png);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    getCountryById();
  }, [editId]);

  const handleChange = (e, special) => {
    if (special === "name") {
      setCountryData(prev => ({
        ...prev,
        name: { common: e.target.value }
      })); 
      return;
    }

    if (special === "capital") {
      setCountryData(prev => ({
        ...prev,
        capital: [e.target.value]
      })); 
      return;
    }

    setCountryData(prev => ({ 
      ...prev, 
      [e.target.name]: e.target.value
    }));
  };

  const addCountryAPI = async (newCountry) => {
    setLoading(true);
    try {
      await addDoc(collection(db, "countries"), {
        ...newCountry,
        isChecked: false
      });
      
      setError("");
      setLoading(false);
      ref.current.close();
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const editCountryAPI = async (editCountry) => {
    setLoading(true);
    try {
      await updateDoc(doc(db, "countries", editId), {
        ...editCountry
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
      console.log(countryData)
      addCountryAPI(countryData);
    } else {
      editCountryAPI(countryData);
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

  return {
    error,
    loading,
    photoURL,
    perc,
    ModalRef,
    countryData,
    target,
    handleChange,
    handleSubmit,
    handleFileChange
  };
};

export default useAddEditCountryModal;