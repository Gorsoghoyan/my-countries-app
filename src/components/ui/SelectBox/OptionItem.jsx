import s from "./styles.module.scss";

function OptionItem({ optionName, onClick, background }) {
  return (
    <div 
      onClick={onClick} 
      className={s.optionItem}
      style={{ background: background || null }}
    >
      {optionName}
    </div>
  );
}

export default OptionItem;