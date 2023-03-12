import s from "./styles.module.scss";

function InputLabel({ 
  id, 
  type, 
  name, 
  value,
  placeholder,
  autoFocus,
  onChange
}) {

  return (
    <div className={s.wrapper}>
      <input 
        id={id}
        type={type}
        name={name}
        value={value}
        autoFocus={autoFocus}
        onChange={onChange}
        required
      />
      <label htmlFor={id}>{placeholder}</label>
    </div>
  );
};

export default InputLabel;