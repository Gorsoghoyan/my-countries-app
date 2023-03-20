import { MdOutlineDashboard, MdManageAccounts } from "react-icons/md";
import { ACCOUNTS, COUNTRIES, DASHBOARD, PROFILE } from "../utils/constants";
import { RiEarthFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export const navigations = [
  {
    title: "Dashboard",
    icon: <MdOutlineDashboard />,
    path: DASHBOARD.LINK,
  },
  {
    title: "Countries",
    icon: <RiEarthFill />,
    path: COUNTRIES.LINK,
  },
  {
    type: "accounts",
    title: "Accounts",
    icon: <MdManageAccounts />,
    path: ACCOUNTS.LINK,
  },
  {
    title: "Profile",
    icon: <CgProfile />,
    path: PROFILE.LINK,
  },
];
