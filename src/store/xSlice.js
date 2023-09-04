import { createSlice } from "@reduxjs/toolkit";

const xSlice = createSlice({
  name: "xSlice",
  initialState: {
    xMoves: [],
  },
  reducers: {
    xMoves: (state, action) => {
      state.xMoves = [action.payload, ...state.xMoves];
    },
  },
});

export default xSlice;
