import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.currentUser = action.payload;
    },
    userLogout: (state) => {
      localStorage.setItem("user", null);
      state.currentUser = null;
    },
  },
});

export const selectCurrentUser = (state) => state.user.currentUser;

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
