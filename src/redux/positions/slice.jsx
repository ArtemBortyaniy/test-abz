import { createSlice } from "@reduxjs/toolkit";
import { getPositions } from "./operations";

const initialState = {
  position: [],
};

const positionSlice = createSlice({
  name: "position",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPositions.fulfilled, (state, action) => {
      state.position = action.payload;
    });
  },
});

export const positionReducer = positionSlice.reducer;
