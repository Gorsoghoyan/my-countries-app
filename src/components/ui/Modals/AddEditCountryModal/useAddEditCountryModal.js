import { useImperativeHandle, useRef, useState } from "react";

const initialData = {
  name: { common: "" },
  capital: [""],
  region: "",
  area: "",
  population: null
};

const useAddEditCountryModal = (type, ref) => {
  const [countryData, setCountryData] = useState(initialData);

  const ModalRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => ModalRef.current.open(),
      close: () => ModalRef.current.close(),
    }
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(countryData);
  };

  return {
    ModalRef,
    handleChange,
    handleSubmit
  };
};

export default useAddEditCountryModal;