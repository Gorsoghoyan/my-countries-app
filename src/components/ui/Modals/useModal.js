import { useEffect, useMemo } from "react";
import useClickOutSide from "../../../hooks/useClickOutSide";

const useModal = (onClose) => {
  const clickRef = useClickOutSide(() => onClose());

  // useEffect(() => {
  //   document.body.style.overflow = "hidden";

  //   return () => document.body.style.overflow = "auto";
  // });

  const backdrop = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }), []);

  const modal = useMemo(() => ({
    initial: { opacity: 0, scale: 0.25 },
    current: { 
      opacity: 1, 
      scale: 1, 
      transform: { delay: 1 },
      transition: { duration: 0.6 }
    },
    exit: { 
      opacity: 0, 
      scale: 0,
      transition: { duration: 0.6 }
    }
  }), []);

  return {
    clickRef,
    backdrop,
    modal
  };
};

export default useModal;