import s from "./styles.module.scss";
import c from "classnames";

function Spinner({ size, t, color, marginTop, className }) {
  return (
    <div 
      className={c(s.loading, className)}
      style={{
        width: size,
        height: size,
        border: `${t} solid ${color}`,
        marginTop
      }}
    ></div>
  )
}

export default Spinner;