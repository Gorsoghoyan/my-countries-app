import Button from "../Button/Button";
import s from "./styles.module.scss";

function PageTopPart({
  title,
  button,
  btnText,
  btnBackground,
  btnBorder,
  btnPadding,
  onClick
}) {
  return (
    <div className={s.container}>
      <h2>{title}</h2>
      {button && (
        <Button
          className={s.btn}
          onClick={onClick}
          style={{
            background: btnBackground,
            border: btnBorder,
            padding: btnPadding
          }}
        >
          {btnText}
        </Button>
      )}
    </div>
  );
}

export default PageTopPart;
