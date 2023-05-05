import { useEffect, useState } from "react";
import { useRef } from "react";
import { db } from "../../lib/firebase";
import {
  collection, endBefore, getDocs, limit,
  limitToLast, onSnapshot, orderBy, query, startAfter, startAt, where
} from "firebase/firestore";

const useAccountsList = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [searchedUser, setSearchedUser] = useState(false);
  const [allUsersSize, setAllUsersSize] = useState(null);

  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [lastVisible, setLastVisible] = useState(null);
  const [firstVisible, setFirstVisible] = useState(null);

  const usersCollection = collection(db, "users");

  const deleteModalRef = useRef(null);
  const addModalRef = useRef(null);
  const editModalRef = useRef(null);

  useEffect(() => {
    const q = query(
      usersCollection,
      where("type", "==", "subUser"),
      orderBy("createdAt", "desc"),
      limit(rowsPerPage)
    );

    setLoading(true);
    const unsub = onSnapshot(q, async (snapshot) => {

      if (firstVisible) {
        const firstVisibleUser = snapshot.docs[0];
        setFirstVisible(firstVisibleUser);
      }

      const lastVisibleUser = snapshot.docs[snapshot.docs.length - 1];

      const firstUsers = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      const allUsers = await getDocs(query(usersCollection, where("type", "==", "subUser")));
      const allUsersSize = allUsers.size;

      setLastVisible(lastVisibleUser);
      setAllUsersSize(allUsersSize);
      setRows(firstUsers);

      setError("");
      setLoading(false);
    }, (error) => {
      setLoading(false);
      setError(error.message);
    });
    setPage(1);

    return () => unsub();
  }, [rowsPerPage]);

  async function getUsers(firstVisible) {
    setLoading(true);
    try {
      const first = firstVisible ? (
        query(
          usersCollection,
          where("type", "==", "subUser"),
          orderBy("createdAt", "desc"),
          startAt(firstVisible.createdAt),
          limit(rowsPerPage)
        )
      ) : (
        query(
          usersCollection,
          where("type", "==", "subUser"),
          orderBy("createdAt", "desc"),
          limit(rowsPerPage)
        )
      );

      const documentSnapshots = await getDocs(first);

      if (firstVisible) {
        const firstVisibleUser = documentSnapshots.docs[0];
        setFirstVisible(firstVisibleUser);
      }

      const lastVisibleUser = documentSnapshots.docs[documentSnapshots.docs.length - 1];

      const firstUsers = documentSnapshots.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      const allUsers = await getDocs(query(usersCollection, where("type", "==", "subUser")));
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
        usersCollection,
        where("type", "==", "subUser"),
        orderBy("createdAt", "desc"),
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
        usersCollection,
        where("type", "==", "subUser"),
        orderBy("createdAt", "desc"),
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

  const deleteAccount = (id) => {
    deleteModalRef.current.open();
    deleteModalRef.current.deleteId(id);
  };

  const editAccount = (id) => {
    editModalRef.current.open();
    editModalRef.current.editId(id);
  };

  const addAccount = () => {
    addModalRef.current.open();
  };

  return {
    error,
    loading,
    page,
    rows,
    rowsPerPage,
    searchedUser,
    allUsersSize,
    deleteModalRef,
    addModalRef,
    editModalRef,
    addAccount,
    editAccount,
    deleteAccount,
    filterData,
    handleChangePage,
    handleSearchedUser,
    handleChangeRowsPerPage
  };
};

export default useAccountsList;