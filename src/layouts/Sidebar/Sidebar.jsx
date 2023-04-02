import { navigations } from "../../configs/sidebar";
import useSidebar from "./useSidebar";
import NavigationItem from "./NavigationItem";
import ImageDiv from "../../components/ui/ImageDiv/ImageDiv";
import defaultPhoto from "../../assets/images/profile.png"
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
          width={36} 
          height={36} 
          image={currentUser?.photoURL}
          defaultImage={defaultPhoto}
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