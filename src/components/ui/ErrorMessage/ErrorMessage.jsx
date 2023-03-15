import s from "./styles.module.scss";

function ErrorMessage({
  error,
  color,
  fontWeight,
  fontSize,
  margin
}) {
  return (
    <p className={s.error} style={{
      color,
      fontWeight,
      fontSize,
      margin
    }}>{error}</p>
  );
}

export default ErrorMessage;