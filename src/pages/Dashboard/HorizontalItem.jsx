import s from "./styles.module.scss";
import c from "classnames";

function HorizontalItem({ title, bgVariant, badge, badgeBgVariant }) {
  return (
    <div className={c(s.horizontalItem, s[bgVariant])}>
      <p>{title}</p>
      {badge && <span className={s[badgeBgVariant]}>{badge}</span>}
    </div>
  );
}

export default HorizontalItem;