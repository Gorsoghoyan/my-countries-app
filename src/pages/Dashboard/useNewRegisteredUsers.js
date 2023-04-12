import { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";

const useNewRegisteredUsers = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

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

    // getNewRegisteredUsers();
  }, []);

  return {
    error,
    loading,
    users
  }
};

export default useNewRegisteredUsers;