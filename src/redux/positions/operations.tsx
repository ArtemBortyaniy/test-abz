import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPositions = createAsyncThunk(
  "positions/getPositions",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("positions");
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
