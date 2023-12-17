import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "./operations";

const initialState = {
  token: "",
};

const tokenSlice = createSlice({
  name: "token",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.token = action.payload.token;
    });
  },
});

export const tokenReducer = tokenSlice.reducer;
