import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  collection: localStorage.getItem("collection") || null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      localStorage.setItem("user", JSON.stringify(payload));
      const collection = payload.permissions ? "subUsers" : "users";
      localStorage.setItem("collection", collection);

      state.collection = collection;
      state.currentUser = payload;
    },
    deleteUser: (state) => {
      localStorage.setItem("user", null);
      state.currentUser = null;
    },
  },
});

export const selectCurrentUser = (state) => state.user.currentUser;
export const selectCollection = (state) => state.user.collection;

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
