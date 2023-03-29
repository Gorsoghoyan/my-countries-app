import { useDispatch, useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter";
import { changePlaceholder, changeValue, selectInput, setLocation, toggleInputClose } from "../../store/slices/searchSlice";
import { collection, getDocs, limit, orderBy, query, startAfter, where, or } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";

const useCountriesList = () => {
  const [lastVisible, setLastVisible] = useState();
  const [countries, setCountries] = useState([]);
  const [dataLimit, setDataLimit] = useState(100);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const [seeMore, setSeeMore] = useState(true);

  const countriesCollection = collection(db, "countries");

  const { value, inputClose } = useSelector(selectInput);
  const dispatch = useDispatch();

  useEffect(() => {
    getCountries();
    dispatch(changePlaceholder("Search by country or region"));
    dispatch(setLocation("countries"));

    return () => {
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

  };

  const deleteCountry = (id) => {

  };

  const checkCountry = (id) => {

  };

  return {
    error,
    loading,
    btnLoading,
    seeMore,
    dataLimit,
    countries,
    checkCountry,
    editCountry,
    deleteCountry,
    getMoreCountries
  };
};

export default useCountriesList;