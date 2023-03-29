import s from "./styles.module.scss";
import c from "classnames";

function GridItem({ children, className, variant, bg }) {
  return (
    <div className={c(className, s[variant], s[bg])}>
      {children}
    </div>
  );  
}

export default GridItem;