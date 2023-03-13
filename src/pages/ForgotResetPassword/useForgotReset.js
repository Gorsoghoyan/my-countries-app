import { useRef, useState } from "react";
import { forgotConfig, resetConfig } from "./config";
import { forgotPassword, resetPassword } from "./api";
import useQuery from "../../hooks/useQuery";

const useForgotReset = (type) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const query = useQuery();
  const inputRef = useRef(null);

  const current = type === "forgot" ? forgotConfig : resetConfig;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    if (type === "forgot") {
      forgotPassword(
        inputRef.current.value,
        setLoading,
        setError
      );
    } else {
      resetPassword(
        query.get("oobCode"), 
        inputRef.current.value,
        setLoading,
        setError
      );
    }
  };

  return {
    error,
    loading,
    current,
    inputRef,
    handleSubmit
  };
};

export default useForgotReset;