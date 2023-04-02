import Button from "../Button/Button";
import s from "./styles.module.scss";

function PageTopPart({ title, variant, button, btnText, onClick }) {
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      {button && (
        <Button variant={variant} onClick={onClick}>
          {btnText}
        </Button>
      )}
    </div>
  );
}

export default PageTopPart;
