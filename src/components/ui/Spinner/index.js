import s from "./styles.module.scss";

function Spinner({ size, t, color }) {
  return (
    <div 
      className={s.loading}
      style={{
        width: size,
        height: size,
        border: `${t} solid ${color}`
      }}
    ></div>
  )
}

export default Spinner;