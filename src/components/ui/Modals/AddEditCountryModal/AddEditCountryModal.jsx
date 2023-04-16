import { forwardRef } from "react";
import Modal from "../Modal";
import s from "./styles.module.scss";
import useAddEditCountryModal from "./useAddEditCountryModal";

const AddEditCountryModal = forwardRef(({ type }, ref) => {
  const { ModalRef } = useAddEditCountryModal(type, ref);

  return (
    <Modal  
      ref={ModalRef} 
      closeWithin
      className={s.container} 
    >
      <h2>Add country</h2>
    </Modal>
  );
});

export default AddEditCountryModal;