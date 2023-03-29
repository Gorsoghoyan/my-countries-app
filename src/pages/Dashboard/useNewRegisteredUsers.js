import { useEffect, useState } from "react";
import { getPreviousDay } from "../../utils/getPreviousDay";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase";

const useNewRegisteredUsers = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [badgeText, setBadgeText] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getNewRegisteredUsers = async () => {
      setLoading(true);
      try {
        const usersCollection = collection(db, "users");
        const timestamp = getPreviousDay(1);
        let users = [];

        const q = query(
          usersCollection,
          where("type", "==", "subUser"),
          where("createdAt", ">=", timestamp),
          limit(8)
        );

        const documentSnapshots = await getDocs(q);

        if (documentSnapshots.size) {
          users = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          setBadgeText("new sub-users with 2 days data");
        } else {
          const q = query(
            usersCollection,
            where("type", "==", "subUser"),
            limit(8)
          );

          const documentSnapshots = await getDocs(q);

          users = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          setBadgeText("sub-users");
        }

        setError("");
        setLoading(false);
        setUsers(users);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    getNewRegisteredUsers();
  }, []);

  return {
    error,
    loading,
    badgeText,
    users
  }
};

export default useNewRegisteredUsers;