import {
  createSlice,
  PayloadAction,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import { getUsers } from "./operations";
import { ApiResponse } from "./userType";

interface Users {
  users: ApiResponse[];
}

const initialState: Users = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<Users>) => {
    builder.addCase(
      getUsers.fulfilled,
      (state, action: PayloadAction<ApiResponse[]>) => {
        state.users = action.payload;
      }
    );
  },
});

export const usersReducer = usersSlice.reducer;
