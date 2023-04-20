import s from "./styles.module.scss";

function InputLabel({ 
  variant,
  id, 
  type, 
  name, 
  value,
  placeholder,
  inpPlaceholder,
  autoFocus,
  onChange
}) {
  return (
    <div className={s[variant]}>
      <input 
        id={id}
        type={type}
        name={name}
        value={value}
        autoFocus={autoFocus}
        placeholder={inpPlaceholder}
        onChange={onChange}
        required
      />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  );
};

export default InputLabel;