import { useEffect, useImperativeHandle, useState } from "react";

const useDeleteModal = (type, deleteRef) => {
  const [id, setId] = useState("");

  useEffect(() => {
    if (!id) return;
    if (type === "d-country") {
      console.log("country", id);
    } 
    if (type === "d-subUser") {
      console.log("subUser", id);
    }
  }, [id]);

  useImperativeHandle(deleteRef, () => {
    return {
      setId: (id) => setId(id)
    };
  });

  return {

  };
};

export default useDeleteModal;