import { useState } from "react";
import { CiWarning } from "react-icons/ci";
import Modal from "./Modal";

function DeleteModal() {
  const [isOpen, setIsOpen] = useState(true);

  const handleIsOpen = (v) => setIsOpen(v);

  return (
    <Modal 
      width={512} 
      isOpen={isOpen} 
      handleIsOpen={handleIsOpen}
    > 
      <CiWarning fontSize={100} />
    </Modal>
  );
}

export default DeleteModal;