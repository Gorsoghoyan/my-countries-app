import { useSelector } from "react-redux";
// import { selectCurrentUser } from "../redux/slices/user/userSlice";
import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import SideBar from "../components/SideBar";
// import Error from "../pages/Error";

const PrivateRoute = () => {
  // const currentUser = useSelector(selectCurrentUser);

  // return currentUser ? (
  //   <>
  //     <Header />
  //     <SideBar />
  //     <Outlet />
  //   </>
  // ) : (
  //   <Error />
  // );
};

export default PrivateRoute;