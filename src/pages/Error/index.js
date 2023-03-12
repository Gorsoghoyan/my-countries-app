import { 
  ERROR_CODE_NUMBER, 
  ERROR_TITLE, 
  ERROR_PAGE_BTN 
} from "../../utils/constants";
import { useNavigate, useRouteError } from "react-router-dom";
import Button from "../../components/ui/Button";
import s from "./styles.module.scss";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <main className={s.container}>
      <div className={s.errorCode}>
        <span>{ERROR_CODE_NUMBER}</span>
      </div>
      <div className={s.errorContent}>
        <h2>{ERROR_TITLE}</h2>
        <p>{error.data}</p>
        <Button
          variant="e"
          onClick={() => navigate(-1)}
        >{ERROR_PAGE_BTN}</Button>
      </div>
    </main>
  );
}

export default Error;