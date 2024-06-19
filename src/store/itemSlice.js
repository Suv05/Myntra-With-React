import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload; // Update the state with initial items
    },
  },
});

export const { addInitialItems } = itemSlice.actions;
export default itemSlice;
