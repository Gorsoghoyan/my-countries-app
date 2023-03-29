import s from "./styles.module.scss";
import c from "classnames";

function Button({
  children,
  variant,
  type,
  width,
  height,
  borderRadius,
  fontSize,
  color,
  background,
  disabled,
  onClick
}) {

  return (
    <button
      type={type}
      className={c(s.default, s[variant])}
      disabled={disabled}
      onClick={onClick}
      style={{
        width, height, fontSize, color, background, borderRadius
      }}
    >
      {children}
    </button>
  );
}

export default Button;