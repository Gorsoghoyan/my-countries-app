import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSideBar: (state, action) => {
      state.open = action.payload;
    },
  },
});

export const selectSideBarOpen = (state) => state.sidebar.open;

export const { toggleSideBar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
