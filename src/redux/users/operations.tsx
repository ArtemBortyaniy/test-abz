import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponse, Pagination } from "./userType";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1/";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.Token = `${token}`;
};

export const getUsers = createAsyncThunk<ApiResponse[], Pagination>(
  "user/getUsers",
  async ({ page, count }, thunkAPI) => {
    try {
      const res = await axios.get(`users?page=${page}&count=${count}`);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createUser = createAsyncThunk<any, any>(
  "user/createUser",
  async (user, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const persistedToken = state.token.token;
    console.log(persistedToken);
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.post("users", user);
      console.log(res.data);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
