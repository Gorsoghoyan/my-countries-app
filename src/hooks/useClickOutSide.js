import { useEffect } from "react";
import { useRef } from "react";

const useClickOutSide = (callback) => {
  const clickRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (clickRef.current && !clickRef.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  });

  return clickRef;
};

export default useClickOutSide;
