import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiResponse, Pagination } from "./userType";

axios.defaults.baseURL =
  "https://frontend-test-assignment-api.abz.agency/api/v1/";

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
