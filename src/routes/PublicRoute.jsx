import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../store/slices/userSlice";
import { DASHBOARD } from "../utils/constants";

const PublicRoute = () => {
  const currentUser = useSelector(selectCurrentUser);

  return currentUser ? <Navigate to={DASHBOARD.LINK} replace /> : <Outlet />;
};

export default PublicRoute;