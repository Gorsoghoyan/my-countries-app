import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../lib/firebase";
import { userLogin } from "../../store/slices/userSlice";
import { DASHBOARD, LOGIN } from "../../utils/constants";
import { getFullName } from "../../utils/getFullName";

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

  const loginUser = async ({ email, password }) => {
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const docSnap = await getDoc(
        doc(db, "users", userCredential.user.uid)
      );
      
      if (docSnap.exists()) {
        dispatch(userLogin(docSnap.data()));
      } else {
        const docSnap = await getDoc(
          doc(db, "subUsers", userCredential.user.uid)
        );
  
        if (docSnap.exists()) {
          dispatch(userLogin(docSnap.data()));
        } 
      }
  
      setError("");
      setLoading(false);
      navigate(DASHBOARD.LINK);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  
  const registerUser = async ({ email, password, firstName, lastName}) => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      await setDoc(doc(db, "users", userCredential.user.uid), {
        displayName: getFullName(firstName, lastName),
        photoURL: "",
        createdAt: serverTimestamp()
      });
  
      setError("");
      setLoading(false);
      navigate(LOGIN.LINK);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (type === "login") {
      loginUser(userData);
    } else {
      registerUser(userData);
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