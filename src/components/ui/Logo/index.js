import { GiEarthAfricaEurope } from "react-icons/gi";
import s from "./styles.module.scss";

function Logo({ svgFontSize, nameFontSize, cursor, onClick }) {
  return (
    <div className={s.logo} onClick={onClick} style={{ cursor }}>
      <GiEarthAfricaEurope fontSize={svgFontSize} />
      <h2 style={{ fontSize: nameFontSize }}>
        Countries<span>Admin</span>
      </h2>
    </div>
  );
}

export default Logo;
