import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DASHBOARD, LOGIN } from "../../utils/constants";
import { changeValue, selectInput, toggleInputClose } from "../../store/slices/searchSlice";
import { selectCurrentUser, deleteUser } from "../../store/slices/userSlice";
import { selectSideBarOpen, toggleSideBar } from "../../store/slices/sidebarSlice";
import useToggle from "../../hooks/useToggle";
import useClickOutSide from "../../hooks/useClickOutSide";

const useHeader = () => {
  const [openDropDown, toggleDropDown] = useToggle(false);

  const inputRef = useRef(null);
  
  const clickRef = useClickOutSide(() => toggleDropDown(false));

  const { location, placeholder, value, inputClose } = useSelector(selectInput);
  const currentUser = useSelector(selectCurrentUser);
  const sidebarOpen = useSelector(selectSideBarOpen); 

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.value = value;
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inpValue = inputRef.current.value;

    if (!location) return;
    if (!inpValue) return;
    if (inpValue === value) return;
    dispatch(changeValue(inpValue));
    dispatch(toggleInputClose(true));
  };

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

  const resetInput = () => {
    dispatch(changeValue(""));
  };

  return {
    inputRef,
    clickRef,
    inputClose,
    placeholder,
    currentUser,
    openDropDown,
    toggleDropDown,
    resetInput,
    onGoHome,
    handleSubmit,
    handleDropDownClick,
    handleToggleSidebar
  };
};

export default useHeader;