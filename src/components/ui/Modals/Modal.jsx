import useModal from "./useModal";
import { AnimatePresence, motion } from "framer-motion";
import s from "./styles.module.scss";

function Modal({ show, onClose, closeWithin, children }) {
  const { clickRef, backdrop, modal } = useModal(onClose);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.section
          className={s.modalBackdrop}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className={s.modalDialog}
            ref={clickRef}
            variants={modal}
            initial="initial"
            animate="current"
            exit="exit"
          >
            <div className={s.modalContent}>
              {children}
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Modal;