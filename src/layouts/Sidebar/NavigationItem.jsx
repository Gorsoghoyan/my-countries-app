import { NavLink } from "react-router-dom";
import s from "./styles.module.scss";

function NavigationItem({ 
  title, 
  type, 
  icon, 
  path, 
  onClick, 
  currentUser 
}) {
  
  if (currentUser?.permissions && type === "accounts") {
    return null;
  }

  return (
    <NavLink
      onClick={onClick}
      to={path}
      className={({ isActive }) =>
        isActive ? `${s.navItem} ${s.active}` : `${s.navItem}`
      }
    >
      {icon}
      <span>{title}</span>
    </NavLink>
  );
}

export default NavigationItem;
