import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "axios";

const initialState = {
  mode: "light",
  data: [],
};

export const setThemeMode = createAsyncThunk(
  "layout/setThemeMode",
  async (mode) => {
    return mode;
  }
);

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  extraReducers: {
    [setThemeMode.fulfilled]: (state, action) => {
      console.log("action.payload", action.payload);
      return { ...state, mode: action.payload.mode };
    },
  },
});

const { reducer } = layoutSlice;
export default reducer;
