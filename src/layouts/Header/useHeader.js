import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DASHBOARD, LOGIN } from "../../utils/constants";
import { selectCurrentUser, deleteUser } from "../../store/slices/userSlice";
import { selectSideBarOpen, toggleSideBar } from "../../store/slices/sidebarSlice";
import useToggle from "../../hooks/useToggle";
import useClickOutSide from "../../hooks/useClickOutSide";

const useHeader = () => {
  const [photoURL, setPhotoURL] = useState("");
  const [openDropDown, toggleDropDown] = useToggle(false);

  const inputRef = useRef(null);
  const clickRef = useClickOutSide(() => toggleDropDown(false));
  const currentUser = useSelector(selectCurrentUser);
  const sidebarOpen = useSelector(selectSideBarOpen); 

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser) return;
    setPhotoURL(currentUser.photoURL);
  }, [currentUser]);

  const onGoHome = () => {
    navigate(DASHBOARD.LINK);
  };

  const handleDropDownClick = (e, type) => {
    e.stopPropagation()

    toggleDropDown();

    if (type === "logout") {
      dispatch(deleteUser());
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
    photoURL,
    currentUser,
    openDropDown,
    toggleDropDown,
    onGoHome,
    handleDropDownClick,
    handleToggleSidebar
  };
};

export default useHeader;