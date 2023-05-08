import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/slices/userSlice";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";

const useNewRegisteredUsers = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const getNewRegisteredUsers = async () => {
      setLoading(true);
      try {
        const usersCollection = collection(db, "users");

        const q = query(
          usersCollection,
          where("type", "==", "subUser"),
          orderBy("createdAt", "desc"),
          limit(8)
        );

        const documentSnapshots = await getDocs(q);

        const users = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));

        setError("");
        setLoading(false);
        setUsers(users);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    // !currentUser.permissions && getNewRegisteredUsers();
  }, []);

  return {
    error,
    loading,
    users,
    currentUser
  }
};

export default useNewRegisteredUsers;