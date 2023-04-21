import { useImperativeHandle, useRef } from "react";

const useAddEditSubUserModal = (type, ref) => {

  const ModalRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => ModalRef.current.open(),
      close: () => ModalRef.current.close()
    }
  });

  return {
    ModalRef
  };
};

export default useAddEditSubUserModal;