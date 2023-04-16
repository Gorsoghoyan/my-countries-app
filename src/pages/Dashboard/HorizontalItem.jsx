import s from "./styles.module.scss";
import c from "classnames";

function HorizontalItem({ 
  title, 
  hover, 
  fontSize, 
  bgVariant, 
  badge, 
  badgeBgVariant 
}) {
  return (
    <div className={c(s.horizontalItem, s[bgVariant], s[hover ? "hover" : ""])}>
      <p style={{ fontSize }}>{title}</p>
      {badge && <span className={s[badgeBgVariant]}>{badge}</span>}
    </div>
  );
}

export default HorizontalItem;