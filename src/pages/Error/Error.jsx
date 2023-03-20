import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import s from "./styles.module.scss";

function Error() {
  const navigate = useNavigate();

  return (
    <main className={s.container}>
      <div className={s.errorCode}>
        <span>404</span>
      </div>
      <div className={s.errorContent}>
        <h2>We couldn't find it...</h2>
        <p>This path was not found` {document.location.pathname}</p>
        <Button
          variant="e"
          onClick={() => navigate(-1)}
        >Go Home</Button>
      </div>
    </main>
  );
}

export default Error;