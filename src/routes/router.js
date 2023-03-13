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

const AuthPage = lazy(() => import("../pages/Auth"));
const ErrorPage = lazy(() => import("../pages/Error"));
const AccountsPage = lazy(() => import("../pages/Accounts"));
const DashboardPage = lazy(() => import("../pages/Dashboard"));
const CountriesPage = lazy(() => import("../pages/Countries"));
const ForgotResetPasswordPage = lazy(() => import("../pages/ForgotResetPassword"));

export const router = createBrowserRouter([
  {
    index: true,
    element: <RootRoute />
  },
  {
    path: "*",
    element: <ErrorPage />
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
            element: <DashboardPage />,
          },
          {
            path: ACCOUNTS.PATH,
            element: <AccountsPage />
          },
          {
            path: COUNTRIES.PATH,
            element: <CountriesPage />,
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
        element: <AuthPage type="login" />
      },
      {
        path: REGISTER.PATH,
        element: <AuthPage type="register" />
      },
      {
        path: FORGOT_PASSWORD.PATH,
        element: <ForgotResetPasswordPage type="forgot" />
      },
      {
        path: RESET_PASSWORD.PATH,
        element: <ForgotResetPasswordPage type="reset" />
      }
    ]
  },
]);