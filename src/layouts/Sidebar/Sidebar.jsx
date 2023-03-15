import { navigations } from "./config";
import useSidebar from "./useSidebar";
import NavigationItem from "./NavigationItem";
import ImageDiv from "../../components/ui/ImageDiv/ImageDiv";
import profileDefault from "../../assets/images/profile.webp"
import s from "./styles.module.scss";
import c from "classnames";

function Sidebar() {
  const { open, clickRef, currentUser, closeSideBar } = useSidebar();

  return (
    <aside 
      ref={clickRef} 
      className={c(s.container, { [s.open]: open })}
    >
      <div className={s.topContainer}>
        <ImageDiv 
          width={40} 
          height={40} 
          image={currentUser?.photoURL || profileDefault} 
        />
        <p>{currentUser?.displayName}</p>
      </div>
      <div className={s.navigationContainer}>
        <h3>Navigation</h3>
        {navigations.map((item, index) => (
          <NavigationItem
            key={index}
            type={item.type}
            title={item.title}
            icon={item.icon}
            path={item.path}
            currentUser={currentUser}
            onClick={closeSideBar}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;