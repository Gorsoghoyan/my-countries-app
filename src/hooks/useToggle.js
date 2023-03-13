import { useState } from "react";

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const toggle = (toggle) => {
    if (toggle !== undefined) {
      setValue(toggle);
      return;
    }
    setValue(prev => !prev);
  };

  return [value, toggle];
};

export default useToggle;