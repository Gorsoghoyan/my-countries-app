import s from "./styles.module.scss";
import c from "classnames";

function Button({
  children,
  variant,
  type,
  disabled,
  onClick,
  width,
  height,
  fontSize,
  margin,
  borderRadius,
  color,
  background,
}) {

  return (
    <button
      type={type}
      className={c(s.default, s[variant])}
      disabled={disabled}
      onClick={onClick}
      style={{
        width, 
        height, 
        fontSize, 
        color, 
        background, 
        borderRadius, 
        margin
      }}
    >
      {children}
    </button>
  );
}

export default Button;