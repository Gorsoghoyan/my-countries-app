import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload));
      state.currentUser = payload;
    },
    deleteUser: (state) => {
      localStorage.setItem("user", null);
      state.currentUser = null;
    },
  },
});

export const selectCurrentUser = (state) => state.user.currentUser;

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
