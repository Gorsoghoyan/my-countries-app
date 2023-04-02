import { forwardRef } from "react";
import Modal from "../Modal";
import useDeleteModal from "./useDeleteModal";

const DeleteModal = forwardRef(({ type, deleteRef }, ref) => {
  useDeleteModal(type, deleteRef);

  return (    
    <Modal ref={ref} closeWithin>
      <h2>ioioasd</h2>
    </Modal>
  );
});

export default DeleteModal;