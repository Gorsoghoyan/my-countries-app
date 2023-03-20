import { useEffect, useState } from "react";
import { collection, endBefore, getDocs, limit, limitToLast, orderBy, query, startAfter, startAt } from "firebase/firestore";
import { db } from "../../lib/firebase";

const useAccountsList = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [searchedUser, setSearchedUser] = useState(false);
  const [allUsersSize, setAllUsersSize] = useState(null);

  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const [lastVisible, setLastVisible] = useState(null);
  const [firstVisible, setFirstVisible] = useState(null);
  
  const subUsersCollection = collection(db, "subUsers");

  useEffect(() => {
    getUsers();
    setPage(1);
  }, [rowsPerPage]);

  async function getUsers(firstVisible) {
    setLoading(true);
    try {
      const first = firstVisible ? (
        query(
          subUsersCollection, 
          orderBy("email"), 
          startAt(firstVisible.email), 
          limit(rowsPerPage)
        )
      ) : (
        query(subUsersCollection, orderBy("email"), limit(rowsPerPage))
      );

      const documentSnapshots = await getDocs(first);

      if (firstVisible) {
        const firstVisibleUser = documentSnapshots.docs[0];
        setFirstVisible(firstVisibleUser);
      }

      const lastVisibleUser = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  
      const firstUsers = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      const allUsers = await getDocs(subUsersCollection);
      const allUsersSize = allUsers.size;

      setLastVisible(lastVisibleUser);
      setAllUsersSize(allUsersSize);
      setRows(firstUsers);

      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  async function getNextUsers() {
    setLoading(true);
    try {
      const next = query(
        subUsersCollection, 
        orderBy("email"), 
        startAfter(lastVisible),
        limit(rowsPerPage)
      );

      const documentSnapshots = await getDocs(next);

      const firstVisibleUser = documentSnapshots.docs[0];
      const lastVisibleUser = documentSnapshots.docs[documentSnapshots.docs.length - 1];

      const nextUsers = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      setLastVisible(lastVisibleUser);
      setFirstVisible(firstVisibleUser);
      setRows(nextUsers);
      setPage(page + 1);

      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  async function getPrevUsers() {
    setLoading(true);
    try {
      const prev = query(
        subUsersCollection, 
        orderBy("email"), 
        endBefore(firstVisible),
        limitToLast(rowsPerPage)
      );

      const documentSnapshots = await getDocs(prev);

      const firstVisibleUser = documentSnapshots.docs[0];
      const lastVisibleUser = documentSnapshots.docs[documentSnapshots.docs.length - 1];

      const prevUsers = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));

      setFirstVisible(firstVisibleUser);
      setLastVisible(lastVisibleUser);
      setRows(prevUsers);
      setPage(page - 1);

      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  const handleChangePage = (arrow) => {
    if (searchedUser) {
      filterData();      
      setSearchedUser(false);
      return;
    }
    if (arrow === "next") {
      getNextUsers();
    } else {
      getPrevUsers();
    }
  };

  const filterData = (v) => {
    if (v) {
      setFirstVisible(rows[0]);
      setRows([v]);
    } else {
      getUsers(firstVisible);
    }
  };

  const handleChangeRowsPerPage = (newPerPage) => {
    setRowsPerPage(newPerPage);
  };

  const handleSearchedUser = (toggle) => {
    setSearchedUser(toggle);
  };

  return {
    error,
    loading,
    page,
    rows,
    rowsPerPage,
    searchedUser,
    allUsersSize,
    filterData,
    handleChangePage,
    handleSearchedUser,
    handleChangeRowsPerPage
  };
};

export default useAccountsList;