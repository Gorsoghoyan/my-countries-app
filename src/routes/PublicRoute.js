import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../redux/slices/user/userSlice";
import { Outlet } from "react-router-dom";
// import Error from "../pages/Error";

const PublicRoute = () => {
  // const currentUser = useSelector(selectCurrentUser);

  // return currentUser ? <Error /> : <Outlet />;
};

export default PublicRoute;