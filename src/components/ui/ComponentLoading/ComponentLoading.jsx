import Spinner from "../Spinner/Spinner";
import s from "./styles.module.scss";

function ComponentLoading({ size, t, marginTop, variant }) {
  return (
    <Spinner
      className={s[variant]}
      size={size || "50px"}
      color={"#00acac"}
      t={t || "3px"}
      marginTop={marginTop}
    />
  );
}

export default ComponentLoading;
