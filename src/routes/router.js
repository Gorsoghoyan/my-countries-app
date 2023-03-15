import { 
  ACCOUNTS, 
  COUNTRIES, 
  DASHBOARD, 
  FORGOT_PASSWORD, 
  LOGIN, 
  REGISTER, 
  RESET_PASSWORD
} from "../utils/constants";

import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import RootRoute from "./RootRoute";    
import LayoutRoute from "./LayoutRoute";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const Auth = lazy(() => import("../pages/Auth/Auth"));
const Error = lazy(() => import("../pages/Error/Error"));
const Accounts = lazy(() => import("../pages/Accounts/Accounts"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Countries = lazy(() => import("../pages/Countries/Countries"));
const ForgotReset = lazy(() => import("../pages/ForgotReset/ForgotReset"));

export const router = createBrowserRouter([
  {
    index: true,
    element: <RootRoute />
  },
  {
    path: "*",
    element: <Error />
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        element: <LayoutRoute />,
        children: [
          {
            index: true,
            path: DASHBOARD.PATH,
            element: <Dashboard />,
          },
          {
            path: ACCOUNTS.PATH,
            element: <Accounts />
          },
          {
            path: COUNTRIES.PATH,
            element: <Countries />,
          },
          {
            path: "Profile",
            // element: <ProfilePage />
          }
        ]
      }
    ]
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: LOGIN.PATH,
        element: <Auth type="login" />
      },
      {
        path: REGISTER.PATH,
        element: <Auth type="register" />
      },
      {
        path: FORGOT_PASSWORD.PATH,
        element: <ForgotReset type="forgot" />
      },
      {
        path: RESET_PASSWORD.PATH,
        element: <ForgotReset type="reset" />
      }
    ]
  },
]);