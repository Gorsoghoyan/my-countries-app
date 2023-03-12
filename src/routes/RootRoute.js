import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser } from "../store/slices/userSlice"; 
import { DASHBOARD, LOGIN } from "../utils/constants";

const RootRoute = () => {
  const currentUser = useSelector(selectCurrentUser);

  return currentUser ? (
    <Navigate to={DASHBOARD.LINK} />
  ) : (
    <Navigate to={LOGIN.LINK} />
  );
};

export default RootRoute;