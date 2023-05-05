import { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../lib/firebase";

const useAreaChartCountries = () => {
  const [areaChartData, setAreaChartData] = useState([]);
  const [areaLoading, setAreaLoading] = useState(false);

  const [independentCountriesSize, setIndependentCountriesSize] = useState(null);
  const [totalCountriesSize, setTotalCountriesSize] = useState(null);
  const [donutLoading, setDonutLoading] = useState(false);

  const countriesCollection = collection(db, "countries");

  useEffect(() => {
    // getAreaChartData();
    // getDonutChartData();
  }, []);

  async function getAreaChartData() {
    setAreaLoading(true);
    try {
      const q = query(
        countriesCollection,
        orderBy("population", "desc"),
        limit(7)
      );

      const documentSnapshots = await getDocs(q);

      const data = documentSnapshots.docs.map(doc => {
        const country = doc.data();

        return {
          name: country.name.common,
          population: country.population,
          area: country.area
        };
      });

      setAreaLoading(false);
      setAreaChartData(data);
    } catch (error) {
      setAreaLoading(false);
      toast.error(error.message);
    }
  };

  async function getDonutChartData() {
    setDonutLoading(true);
    try {
      const q = query(
        countriesCollection,
        where("independent", "==", true)
      );

      const allCountriesSnapshots = await getDocs(countriesCollection);
      const independentCountriesSnapshots = await getDocs(q);

      setDonutLoading(false);
      setTotalCountriesSize(allCountriesSnapshots.size);
      setIndependentCountriesSize(independentCountriesSnapshots.size);
    } catch (error) {
      setDonutLoading(false);
      toast.error(error.message);
    }
  };

  return {
    areaChartData,
    areaLoading,
    donutLoading,
    independentCountriesSize,
    totalCountriesSize
  };
};

export default useAreaChartCountries;