import { useState } from "react";
import useClickOutside from "../../../hooks/useClickOutSide";
import useScroll from "../../../hooks/useScroll"

const useSelectBox = (defaultValue, onRowsPerPageChange) => {
  const [value, setValue] = useState(defaultValue);
  const [openOptions, setOpenOptions] = useState(false);

  const clickRef = useClickOutside(handleCLoseOptions);
  useScroll(handleCLoseOptions);

  function handleCLoseOptions() {
    if (!openOptions) return; 
    setOpenOptions(false);
  }

  const handleClick = (e) => {
    e.stopPropagation();
    setValue(+e.target.innerHTML);
    onRowsPerPageChange(+e.target.innerHTML);
    setOpenOptions(false);
  };

  const onOpenOptions = () => {
    if (openOptions) return;        
    setTimeout(() => setOpenOptions(true), 0);
  };

  return {
    value,
    clickRef,
    openOptions,
    handleClick,
    onOpenOptions
  };
};

export default useSelectBox;