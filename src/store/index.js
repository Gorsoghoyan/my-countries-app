import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import searchSlice from "./slices/searchSlice";
import sidebarSlice from "./slices/sidebarSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    search: searchSlice,
    sidebar: sidebarSlice
  },
});
