import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../store/slices/userSlice";
import { LOGIN } from "../utils/constants";
import Header from "../layouts/Header/Header";
import Sidebar from "../layouts/Sidebar/Sidebar";

const PrivateRoute = () => {
  const currentUser = useSelector(selectCurrentUser);

  return currentUser ? (
    <Fragment>
      <Header />
      <Sidebar />
      <Outlet />
    </Fragment>
  ) : (
    <Navigate to={LOGIN.LINK} replace />
  );
};

export default PrivateRoute;