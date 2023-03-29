import { useState } from "react";
import { useSelector } from "react-redux";
import { getFullName } from "../../utils/getFullName";
import { selectCurrentUser } from "../../store/slices/userSlice";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

const initialData = {
  firstName: "",
  lastName: "",
  email: "",
  password: ""
};

const useEditProfile = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(initialData);

  const currentUser = useSelector(selectCurrentUser);

  const handleChange = (e) => {
    setUserData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleReset = () => { 
    setUserData(initialData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) return;

    const { firstName, lastName, email, password } = userData;

    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      await updateDoc(doc(db, "users", currentUser.id), {
        displayName: getFullName(firstName, lastName),
        email,
        password
      });

      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
    
    handleReset();
  };

  return {
    error,
    loading,
    userData,
    handleReset,
    handleChange,
    handleSubmit
  };
};

export default useEditProfile;