import s from "./styles.module.scss";
import c from "classnames";

function ErrorMessage({
  variant,
  error,
  color,
  fontWeight,
  fontSize,
  margin
}) {
  return (
    <p className={c(s.error, s[variant])} style={{
      color,
      fontWeight,
      fontSize,
      margin
    }}>{error}</p>
  );
}

export default ErrorMessage;