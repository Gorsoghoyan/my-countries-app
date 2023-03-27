import { AiOutlineClose } from "react-icons/ai";
import useClickOutSide from "../../../hooks/useClickOutSide";
import useToggle from "../../../hooks/useToggle";
import s from "./styles.module.scss";

function Modal({ title, width, height, close = true, children }) {
  const [openModal, toggle] = useToggle(true);

  const clickRef = useClickOutSide(() => toggle(false));

  return (
    openModal && (
      <section className={s.modal}>
        <div
          ref={clickRef}
          className={s.modalDialog}
          style={{ width, height }}
        >
          {close && (
            <AiOutlineClose
              className={s.modalClose}
              onClick={() => toggle(false)}
            />
          )}
          <h2 className={s.modalTitle}>{title}</h2>
          <div className={s.modalContent}>
            {children}
          </div>
        </div>
      </section>
    )
  );
}

export default Modal;