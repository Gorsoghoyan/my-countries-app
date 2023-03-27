import { IoIosArrowUp } from "react-icons/io";
import useGoTop from "./useGoTop";
import s from "./styles.module.scss";
import c from "classnames";

function GoTop() {
  const { active, handleClick } = useGoTop();

  return (
    <div
      className={c(s.container, { [s.active]: active })}
      onClick={handleClick}
    >
      <IoIosArrowUp />
    </div>
  );
}

export default GoTop;
