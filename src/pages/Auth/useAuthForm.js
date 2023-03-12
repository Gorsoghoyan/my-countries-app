import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "./api";

const useAuthForm = (type, initialData) => {
  const [userData, setUserData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setUserData(initialData);
    setError("");
    setLoading(false);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (type === "login") {
      loginUser(
        userData,
        setLoading,
        setError,
        dispatch,
        navigate
      );
    } else {
      registerUser(
        userData,
        setLoading,
        setError,
        navigate
      );
    }
  };

  const handleChange = (e) => {
    setUserData(prev => ({ 
      ...prev, 
      [e.target.name]: e.target.value 
    }));
  };
  
  return {
    error,
    loading,
    userData,
    handleChange,
    handleSubmit
  };
};

export default useAuthForm;