import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../store/slices/userSlice";

const PublicRoute = () => {
  const currentUser = useSelector(selectCurrentUser);

  return currentUser ? <Navigate to={"/404"} /> : <Outlet />;
};

export default PublicRoute;