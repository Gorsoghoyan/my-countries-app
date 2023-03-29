import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { getPreviousDay } from "../../utils/getPreviousDay";
import { useEffect } from "react";
import { db } from "../../lib/firebase";

const useDashboard = () => {

  useEffect(() => {
    getNewRegisteredUsers();
  }, [])
  
  async function getNewRegisteredUsers() {
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
      } else {
        const q = query(
          usersCollection,
          where("type", "==", "subUser"), 
          limit(8)
        );

        const documentSnapshots = await getDocs(q);

        users = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      }

      console.log(users)
    } catch (error) {

    }
  };

  return {

  };
};

export default useDashboard;