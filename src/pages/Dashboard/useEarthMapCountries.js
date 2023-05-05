import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import { toast } from "react-toastify";

const useEarthMapCountries = () => {
  const [checkedCountries, setCheckedCountries] = useState({});
  const [theBiggestCountries, setTheBiggestCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const countriesCollection = collection(db, "countries");

  useEffect(() => {
    const getCheckedCountries = async () => {
      setLoading(true);
      try {
        const q1 = query(
          countriesCollection,
          where("isChecked", "==", true)
        );

        const q2 = query(
          countriesCollection,
          orderBy("area", "desc"),
          limit(3)
        );

        const documentSnapshots1 = await getDocs(q1);
        const documentSnapshots2 = await getDocs(q2);

        const countriesValues = {};

        documentSnapshots1.docs.forEach(doc => {
          const data = doc.data();  

          countriesValues[data.cca2] = Math.floor(100 * Math.random());
        });

        const theBiggestCountries = documentSnapshots2.docs.map(doc => ({ ...doc.data(), id: doc.id }));

        setLoading(false);

        setCheckedCountries(countriesValues);
        setTheBiggestCountries(theBiggestCountries);
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
      }
    };
    // getCheckedCountries();
  }, []);

  return {
    loading,
    checkedCountries,
    theBiggestCountries,
  };
};

export default useEarthMapCountries;