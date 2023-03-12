import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { getFullName } from "../../utils/getFullName";
import { auth, db } from "../../lib/firebase";
import { userLogin } from "../../store/slices/userSlice";
import { DASHBOARD, LOGIN } from "../../utils/constants";

export const loginUser = async (
  user, 
  setLoading, 
  setError, 
  dispatch,
  navigate
) => {
  const { email, password } = user;

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

    const setUser = (currentUser) => {
      dispatch(userLogin(currentUser));
    };

    if (docSnap.exists()) {
      setUser(docSnap.data());
    } else {
      const docSnap = await getDoc(
        doc(db, "subUsers", userCredential.user.uid)
      );

      if (docSnap.exists()) {
        setUser(docSnap.data());
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

export const registerUser = async (
  user, 
  setLoading, 
  setError, 
  navigate
) => {
  const { email, password, firstName, lastName } = user;

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