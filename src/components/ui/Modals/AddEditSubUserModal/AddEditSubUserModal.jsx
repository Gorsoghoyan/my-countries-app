import { forwardRef } from "react";
import Modal from "../Modal";
import useAddEditSubUserModal from "./useAddEditSubUserModal";
import s from "./styles.module.scss";

const AddEditSubUserModal = forwardRef(({ type }, ref) => {
  const { ModalRef } = useAddEditSubUserModal(type, ref);

  return (
    <Modal 
      ref={ModalRef} 
      closeWithin
      className={s.container}
    >
      <h2>Add account</h2>
    </Modal>
  );
});

export default AddEditSubUserModal;