import { LOGIN, PROFILE } from "../utils/constants";

export const dropDownConfig = [
  {
    title: "Edit Profile",
    link: PROFILE.LINK,
  },
  {
    type: "logout",
    title: "Log Out",
    link: LOGIN.LINK,
  },
];
