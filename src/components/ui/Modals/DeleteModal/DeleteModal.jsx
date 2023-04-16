import { forwardRef } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import useDeleteModal from "./useDeleteModal";
import Spinner from "../../Spinner/Spinner";
import Button from "../../Button/Button";
import Modal from "../Modal";
import s from "./styles.module.scss";

const DeleteModal = forwardRef(({ collection }, ref) => {
  const { loading, ModalRef, deleteDocument } = useDeleteModal(collection, ref); 

  return (    
    <Modal ref={ModalRef} className={s.container}>
      <BsExclamationCircle fontSize={100} color="orange" />
      <h2>Are you sure?</h2>
      <p>You won't be able to revert this!</p>
      <Button 
        variant={"a-l"} 
        width={150} 
        fontSize={16} 
        onClick={deleteDocument}
      >
        {loading ? <Spinner size={10}  /> : "Yes, delete it!"}
      </Button>
      <Button 
        variant={"d-c"}   
        width={130}
        onClick={() => ModalRef.current.close()}
      >
        Cancel
      </Button>
    </Modal>
  );
});

export default DeleteModal;