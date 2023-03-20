import { forwardRef } from "react";
import s from "./styles.module.scss"; 

const Input = forwardRef((
  {
    variant,
    type,
    name,
    value,
    defaultValue,
    placeholder,
    autoFocus,
    required,
    readOnly,
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
      defaultValue={defaultValue}
      placeholder={placeholder}
      required={required}
      readOnly={readOnly}
      autoFocus={autoFocus}
      onChange={onChange}
    />
  );
});

export default Input;