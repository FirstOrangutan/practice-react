import { configureStore } from "@reduxjs/toolkit";
import xSlice from "./xSlice";

export const store = configureStore({
  reducer: {
    xSlice: {
      xSlice: xSlice.reducer,
    },
  },
});
