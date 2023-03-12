import { forwardRef } from "react";
import s from "./styles.module.scss"; 

const Input = forwardRef((
  {
    variant,
    type,
    placeholder,
    name,
    value,
    onChange
  }, ref
) => {
  return (
    <input 
      className={s[variant]}
      ref={ref}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
});

export default Input;