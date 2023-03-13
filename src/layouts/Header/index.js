import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { dropDownConfig } from "./config";
import profilePhoto from "../../assets/images/profile.webp";
import ImageDiv from "../../components/ui/ImageDiv";
import Input from "../../components/form/Input";
import Button from "../../components/ui/Button";
import Logo from "../../components/ui/Logo";
import DropDownItem from "./DropDownItem";
import useHeader from "./useHeader";
import s from "./styles.module.scss";
import c from "classnames";

function Header() {
  const {
    inputRef,
    clickRef,
    currentUser,
    openDropDown,
    toggleDropDown,
    onGoHome,
    handleDropDownClick
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
        <RxHamburgerMenu className={s.menuBurger} />
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
          <ImageDiv width={30} height={30} image={profilePhoto} />
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