import Spinner from "../Spinner/Spinner";
import s from "./styles.module.scss";

function PageLoading() {
  return (
  <div className={s.loading}>
    <Spinner size={45} color={"#535353"} t={"2.5px"} />
  </div>
  )
}

export default PageLoading;
