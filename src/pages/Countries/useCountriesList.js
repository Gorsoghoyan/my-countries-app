import { useDispatch, useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { changePlaceholder, changeValue, selectInput, setLocation, toggleInputClose } from "../../store/slices/searchSlice";
import { collection, getDocs, limit, orderBy, query, startAfter, where, or, onSnapshot, updateDoc, doc } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { db } from "../../lib/firebase";
import { toast } from "react-toastify";

const useCountriesList = () => {
  const [lastVisible, setLastVisible] = useState();
  const [countries, setCountries] = useState([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const [seeMore, setSeeMore] = useState(true);

  const dataLimit = 100;
  const countriesCollection = collection(db, "countries");

  const q = query(countriesCollection, orderBy("name.common"), limit(dataLimit));

  const deleteModalRef = useRef(null);
  const addModalRef = useRef(null);
  const editModalRef = useRef(null);

  const { value, inputClose } = useSelector(selectInput);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changePlaceholder("Search by country or region"));
    dispatch(setLocation("countries"));

    setLoading(true);
    const unsub = onSnapshot(q, (snapshot) => {
      const countries = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      const lastVisible = snapshot.docs[snapshot.docs.length - 1];

      setError("");
      setLoading(false);
      setLastVisible(lastVisible);
      setCountries(countries);
    }, (error) => {
      setLoading(false);
      setError(error.message);
    });

    return () => {
      unsub();
      dispatch(changePlaceholder("Search..."));
      dispatch(setLocation(null));
      dispatch(changeValue(""));
    }
  }, []);

  useEffect(() => {
    if (!value && inputClose) {
      dispatch(toggleInputClose(false));
      getCountries();
    }

    if (!value) return;

    getCountryByName(value);
  }, [value]);

  async function getCountries() {
    setLoading(true);
    try {
      const q = query(
        countriesCollection,
        orderBy("name.common"),
        limit(dataLimit)
      );

      const documentSnapshots = await getDocs(q);

      const lastVisibleCountry = documentSnapshots.docs[documentSnapshots.docs.length - 1];

      const countries = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      setLastVisible(lastVisibleCountry);
      setCountries(countries);

      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  async function getMoreCountries() {
    setBtnLoading(true);
    try {
      const q = query(
        countriesCollection,
        orderBy("name.common"),
        startAfter(lastVisible),
        limit(dataLimit)
      );

      const documentSnapshots = await getDocs(q);

      if (documentSnapshots.empty) {
        setSeeMore(false);
        setBtnLoading(false);
        return;
      }

      const lastVisibleCountry = documentSnapshots.docs[documentSnapshots.docs.length - 1];

      const countries = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      setLastVisible(lastVisibleCountry);
      setCountries(prev => [...prev, ...countries]);

      setError("");
      setBtnLoading(false);
    } catch (error) {
      setBtnLoading(false);
      setError(error.message);
    }
  }

  async function getCountryByName(value) {
    setLoading(true);
    try {
      const q = query(
        countriesCollection,
        or(
          where("name.common", "==", capitalizeFirstLetter(value)),
          where("region", "==", capitalizeFirstLetter(value)),
        )
      );

      const documentSnapshots = await getDocs(q);

      const countries = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      setCountries(countries);

      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  const editCountry = (id) => {
    editModalRef.current.open();
    // editModalRef.current.editId(id);
  };

  const deleteCountry = (id) => {
    deleteModalRef.current.open();
    deleteModalRef.current.deleteId(id);
  };

  const checkCountry = async (isChecked, id) => {
    try {
      await updateDoc(doc(db, "countries", id), {
        isChecked: !isChecked
      });

      dispatch(changePlaceholder("Search..."));
      dispatch(changeValue(""));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    error,
    loading,
    btnLoading,
    seeMore,
    dataLimit,
    countries,
    deleteModalRef,
    addModalRef,
    editModalRef,
    checkCountry,
    editCountry,
    deleteCountry,
    getMoreCountries
  };
};

export default useCountriesList;