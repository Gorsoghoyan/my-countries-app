import { useRef } from "react";
import { useImperativeHandle } from "react";

const useAddEditCountryModal = (type, ref) => {


  const ModalRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => ModalRef.current.open(),
      close: () => ModalRef.current.close(),
    }
  });

  return {
    ModalRef,
  };
};

export default useAddEditCountryModal;