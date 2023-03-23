import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { dropDownConfig } from "../../configs/header";
import defaultPhoto from "../../assets/images/profile.png";
import ImageDiv from "../../components/ui/ImageDiv/ImageDiv";
import Input from "../../components/form/Input/Input";
import Button from "../../components/ui/Button/Button";
import Logo from "../../components/ui/Logo/Logo";
import DropDownItem from "./DropDownItem";
import useHeader from "./useHeader";
import s from "./styles.module.scss";
import c from "classnames";

function Header() {
  const {
    inputRef,
    clickRef,
    photoURL,
    currentUser,
    openDropDown,
    toggleDropDown,
    onGoHome,
    handleDropDownClick,
    handleToggleSidebar
  } = useHeader();

  return (
    <header className={s.container}>
      <div className={s.logoPart}>
        <Logo
          nameFontSize={20}
          svgFontSize={28}
          cursor={"pointer"}
          onClick={onGoHome}
        />
        <RxHamburgerMenu 
          onClick={() => handleToggleSidebar()} 
          className={s.menuBurger} 
        />
      </div>
      <nav className={s.navbar}>
        <form className={s.form}>
          <Input
            ref={inputRef}
            variant="s"
            type={"text"}
            placeholder={"Search..."}
          />
          <Button variant="h-s">
            <AiOutlineSearch />
          </Button>
        </form>
        <div 
          ref={clickRef} 
          className={s.dropDownLink} 
          onClick={() => toggleDropDown()}
        >
          <ImageDiv 
            width={30} 
            height={30} 
            image={photoURL || defaultPhoto} 
          />
          <p className={s.displayName}>{currentUser?.displayName}</p>
          <MdOutlineArrowDropDown />
          <div className={c(s.dropDown, { [s.open]: openDropDown })}>
            {dropDownConfig.map((item, index) => (
              <DropDownItem
                key={index}
                title={item.title}
                link={item.link}
                onClick={(e) => handleDropDownClick(e, item.type)}
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;