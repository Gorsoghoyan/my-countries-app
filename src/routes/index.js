import { createBrowserRouter } from "react-router-dom";
import Accounts, { dataLoader } from "../pages/Accounts";
import Auth from "../pages/Auth";
import Countries from "../pages/Countries";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import LayoutRoute from "./LayoutRoute";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import RootRoute from "./RootRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRoute />,
    errorElement: <Error />
  },
  {
    path: "",
    element: <PrivateRoute />,
    children: [
      {
        element: <LayoutRoute />,
        children: [
          {
            path: "",
            element: <Dashboard />
          },
          {
            path: "accounts",
            element: <Accounts />,
            loader: dataLoader
          },
          {
            path: "countries",
            element: <Countries />
          }
        ]
      },
    ]
  },
  {
    element: <PublicRoute />,
    children: [
      {
        path: "sign",
        children: [
          {
            path: "in",
            element: <Auth type="login" />
          },
          {
            path: "up",
            element: <Auth type="register" />
          }
        ]
      }
    ]
  }
]);