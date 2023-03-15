import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/slices/userSlice";
import { selectSideBarOpen, toggleSideBar } from "../../store/slices/sidebarSlice";
import useClickOutSide from "../../hooks/useClickOutSide";

const useSidebar = () => {
  const [open, setOpen] = useState(false);

  const currentUser = useSelector(selectCurrentUser);
  const sidebarOpen = useSelector(selectSideBarOpen);
  const clickRef = useClickOutSide(handleClickRef);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth > 767) return;
    if (sidebarOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [sidebarOpen]);

  const dispatchSideBar = (toggle) => {
    dispatch(toggleSideBar(toggle));
  };

  const closeSideBar = () => {
    dispatchSideBar(false);
  };

  function handleClickRef() {
    if (!sidebarOpen) return;
    dispatchSideBar(false);
  }

  return {
    open,
    clickRef,
    currentUser,
    closeSideBar
  };
};

export default useSidebar;