import { createPortal } from "react-dom";

function Modal({ children, open, onClose }) {
  if (!open) return null;

  return createPortal(
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 999999,
      background: "rgba(0, 0, 0, 0.5)"
    }} onClick={onClose}>{children}</div>,
    document.getElementById("portal")
  );
}

export default Modal;