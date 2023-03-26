import s from "./styles.module.scss";
import c from "classnames";

function GridItem({ children, className, variant }) {
  return (
    <div className={c(className, s[variant])}>
      {children}
    </div>
  );  
}

export default GridItem;