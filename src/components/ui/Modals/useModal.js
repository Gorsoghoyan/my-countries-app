import { useEffect, useImperativeHandle, useState } from "react";
import useClickOutSide from "../../../hooks/useClickOutSide";

const useModal = (ref) => {
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      open: () => setTimeout(() => setOpen(true), 0),
      close: () => setOpen(false)
    };
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const clickRef = useClickOutSide(() => {
    if (open) setOpen(false);
  }); 

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    clickRef,
    handleClose
  };
};

export default useModal;