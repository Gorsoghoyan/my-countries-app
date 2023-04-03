import s from "./styles.module.scss";
import c from "classnames";

function GridItem({ children, className, gridColumn, variant, bg }) {
  return (
    <div style={{ gridColumn }} className={c(className, s[variant], s[bg])}>
      {children}
    </div>
  );  
}

export default GridItem;