import s from "./styles.module.scss";
import c from "classnames";

function Button({
  children,
  variant,
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