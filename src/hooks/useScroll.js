import { useEffect } from "react";

const useScroll = (callback) => {

  useEffect(() => {
    const handleScroll = (e) => {
      callback(e);
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  });

};

export default useScroll;
