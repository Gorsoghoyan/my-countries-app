import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  placeholder: "",
  value: "",
  location: null
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
    changePlaceholder: (state, action) => {
      state.placeholder = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    }
  },
});

export const selectInput = (state) => state.search;

export const { changeValue, changePlaceholder, setLocation } = searchSlice.actions;

export default searchSlice.reducer;
