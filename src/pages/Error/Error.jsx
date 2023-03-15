import { 
  ERROR_CODE_NUMBER, 
  ERROR_TITLE, 
  ERROR_PAGE_BTN, 
  ERROR_PATH_TEXT
} from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import s from "./styles.module.scss";

function Error() {
  const navigate = useNavigate();

  return (
    <main className={s.container}>
      <div className={s.errorCode}>
        <span>{ERROR_CODE_NUMBER}</span>
      </div>
      <div className={s.errorContent}>
        <h2>{ERROR_TITLE}</h2>
        <p>{ERROR_PATH_TEXT + document.location.pathname}</p>
        <Button
          variant="e"
          onClick={() => navigate(-1)}
        >{ERROR_PAGE_BTN}</Button>
      </div>
    </main>
  );
}

export default Error;