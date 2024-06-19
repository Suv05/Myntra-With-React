import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import bagSlice from "./BagSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemSlice.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
