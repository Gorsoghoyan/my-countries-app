import { CiWarning } from "react-icons/ci";
import Modal from "./Modal";

function DeleteModal({ title }) {
  return (
    <Modal title={title} width={512} close={false}>
      <CiWarning fontSize={100} />
    </Modal>
  );
}

export default DeleteModal;