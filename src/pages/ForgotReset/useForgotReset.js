import { useRef, useState } from "react";
import { forgotConfig, resetConfig } from "../../configs/forgotReset";
import { confirmPasswordReset, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { toast } from "react-toastify";
import useQuery from "../../hooks/useQuery";

const useForgotReset = (type) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const query = useQuery();
  const inputRef = useRef(null);

  const current = type === "forgot" ? forgotConfig : resetConfig;

  const forgotPassword = async (email) => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setLoading(false);
      setError("");
      toast.success("Please check your gmail");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  
  const resetPassword = async (oobCode, newPassword) => {
    setLoading(true);
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setLoading(false);
      setError("");
      toast.success("Password has been changed, you can login now.");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    if (type === "forgot") {
      forgotPassword(inputRef.current.value);
    } else {
      resetPassword(query.get("oobCode"), inputRef.current.value);
    }

    inputRef.current.value = "";
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