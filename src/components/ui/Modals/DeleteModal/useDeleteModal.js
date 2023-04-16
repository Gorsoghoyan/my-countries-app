import { deleteDoc, doc } from "firebase/firestore";
import { useImperativeHandle, useRef, useState } from "react";
import { db } from "../../../../lib/firebase";
import { toast } from "react-toastify";

const useDeleteModal = (collection, ref) => {
  const [loading, setLoading] = useState(false);

  const ModalRef = useRef(null);

  let id = "";

  useImperativeHandle(ref, () => {
    return {
      open: () => ModalRef.current.open(),
      close: () => ModalRef.current.close(),
      deleteId: (deleteId) => {
        id = deleteId;
      }
    };
  });

  const deleteDocument = async () => {
    setLoading(true);
    try {
      await deleteDoc(doc(db, collection, id));

      setLoading(false);
      ModalRef.current.close();
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return {
    loading,
    ModalRef,
    deleteDocument
  };
};

export default useDeleteModal;