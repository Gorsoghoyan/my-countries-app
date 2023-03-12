import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "../../components/form/Input";
import Button from "../../components/ui/Button";
import Logo from "../../components/ui/Logo";
import s from "./styles.module.scss";

function Header() {

  return (
    <header className={s.container}>
      <div className={s.logoPart}>
        <Logo
          nameFontSize={20}
          svgFontSize={28}
          cursor={"pointer"}
          // onClick={onGoHome}
        />
        <RxHamburgerMenu className={s.menuBurger} />
      </div>
      <nav className={s.navbar}>
        <form className={s.form}>
          <Input  
            // ref={}
            variant="search" 
            type={"text"}
            placeholder={"Search..."}
          />
          <Button variant="h-s">
            <AiOutlineSearch />
          </Button>
        </form>
         
      </nav>
    </header>
  );
}

export default Header;