import { useState } from "react";
import useScroll from "../../../hooks/useScroll";

const useGoTop = () => {
  const [active, setActive] = useState(false);
  
  useScroll(handleScroll);

  function handleScroll() {
    if (!active && window.pageYOffset > 600) {
      setActive(true);
    } else if (active && window.pageYOffset <= 600) {
      setActive(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    active,
    handleClick,
  };
};

export default useGoTop;