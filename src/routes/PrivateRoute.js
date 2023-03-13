import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../store/slices/userSlice";
import Header from "../layouts/Header";

const PrivateRoute = () => {
  const currentUser = useSelector(selectCurrentUser);

  return currentUser ? (
    <Fragment>
      <Header />
      {/* <SideBar /> */}
      <Outlet />
    </Fragment>
  ) : (
    <Navigate to={"/404"} replace />
  );
};

export default PrivateRoute;