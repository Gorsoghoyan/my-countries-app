import Input from "../../../form/Input/Input";
import AutocompleteItem from "./AutocompleteItem";
import useAutoComplete from "./useAutocomplete";
import ComponentLoading from "../../ComponentLoading/ComponentLoading";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import v from "../../../../assets/sass/_variables.scss";
import s from "./autocomplete.module.scss";
import c from "classnames";

function Autocomplete({
  className,
  placeholder,
  options,
  getOptionLabel,
  onChange,
  handleSearchedUser,
  searchedUser
}) {
  const {
    open,
    value,
    clickRef,
    isPending,
    filteredOptions,
    openDropDown,
    handleChange,
    handleItemClick,
  } = useAutoComplete(
    options,
    getOptionLabel,
    onChange,
    handleSearchedUser,
    searchedUser
  );

  return (
    <div
      ref={clickRef}
      className={c(s.container, className)}
      onClick={openDropDown}
    >
      <Input
        type={"text"}
        value={value}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className={s.icons}>
        <AiOutlineClose
          className={c(s.cross, { [s.active]: searchedUser })}
          onClick={() => handleChange("")}
        />
        <IoMdArrowDropdown className={c(s.arrow, { [s.rotate]: open })} />
      </div>
      <div className={c(s.dropDown, { [s.open]: open })}>
        {isPending && (
          <ComponentLoading 
            className={s.inputLoader} 
            size={"20px"} 
            t="2px" 
          />
        )}
        {Boolean(filteredOptions.length) && (
          filteredOptions.map((option) => (
            <AutocompleteItem
              key={option.id}
              className={s.item}
              background={searchedUser ? v.itemBg : null}
              optionName={getOptionLabel(option)}
              onClick={(e) => handleItemClick(e, option)}
            />
          )
          ))}
        {Boolean(!filteredOptions.length) && (
          <AutocompleteItem
            className={s.item}
            optionName={"No options"}
            cursor={"auto"}
            background={v.noItemBg}
          />
        )}
      </div>
    </div>
  );
}

export default Autocomplete;