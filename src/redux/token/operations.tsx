import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.Token = `${token}`;
};

export const getToken = createAsyncThunk(
  "auth/getToken",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/token");
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
