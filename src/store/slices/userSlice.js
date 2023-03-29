import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      const userConfig = {
        id: payload.id,
        displayName: payload.displayName,
        createdAt: payload.createdAt,
        photoURL: payload.photoURL
      };

      localStorage.setItem("user", JSON.stringify(userConfig));
      state.currentUser = userConfig;
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
