
function AutocompleteItem({ optionName, onClick, background, cursor, className }) {
  return (
    <div
      className={className}
      style={{ background, cursor }}
      onClick={onClick}
    >
      {optionName}
    </div>
  );
}

export default AutocompleteItem;