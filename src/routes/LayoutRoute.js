import { Outlet } from "react-router-dom";
import MainContainer from "../layouts/MainContainer";

const LayoutRoute = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};

export default LayoutRoute;
