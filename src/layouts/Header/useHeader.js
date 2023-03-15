import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, userLogout } from "../../store/slices/userSlice";
import { DASHBOARD, LOGIN } from "../../utils/constants";
import useToggle from "../../hooks/useToggle";
import useClickOutSide from "../../hooks/useClickOutSide";
import { selectSideBarOpen, toggleSideBar } from "../../store/slices/sidebarSlice";

const useHeader = () => {
  const [openDropDown, toggleDropDown] = useToggle(false);

  const inputRef = useRef(null);
  const clickRef = useClickOutSide(() => toggleDropDown(false));
  const currentUser = useSelector(selectCurrentUser);
  const sidebarOpen = useSelector(selectSideBarOpen); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onGoHome = () => {
    navigate(DASHBOARD.LINK);
  };

  const handleDropDownClick = (e, type) => {
    e.stopPropagation()

    toggleDropDown();

    if (type === "logout") {
      dispatch(userLogout());
      navigate(LOGIN.LINK);
    }
  };

  const handleToggleSidebar = () => {
    if (sidebarOpen) return;
    setTimeout(() => dispatch(toggleSideBar(true)), 0);
  };

  return {
    inputRef,
    clickRef,
    currentUser,
    openDropDown,
    toggleDropDown,
    onGoHome,
    handleDropDownClick,
    handleToggleSidebar
  };
};

export default useHeader;