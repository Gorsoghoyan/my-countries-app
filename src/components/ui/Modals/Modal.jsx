import useModal from "./useModal";
import { forwardRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import s from "./styles.module.scss";
import c from "classnames";

const Modal = forwardRef(({ className, closeWithin, children }, ref) => {
  const { open, clickRef, handleClose } = useModal(ref);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.section
          className={s.modalBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { delay: 0.1 } }}
        >
          <motion.div
            className={s.modalDialog}
            ref={clickRef}
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3 } }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
          >
            <div className={s.modalContent}>
              {closeWithin && (
                <AiOutlineClose
                  className={s.modalClose}
                  onClick={handleClose}
                />
              )}
              <div className={c(s.modalContentBody, className)}>
                {children}
              </div>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
});

export default Modal;