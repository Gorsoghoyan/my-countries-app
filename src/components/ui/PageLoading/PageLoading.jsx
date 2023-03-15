import Spinner from "../Spinner/Spinner";
import s from "./styles.module.scss";

function PageLoading() {
  return (
  <div className={s.loading}>
    <Spinner size={50} color={"#535353"} t={""} />
  </div>
  )
}

export default PageLoading;
