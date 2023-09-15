import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const createTest = createAsyncThunk("test/create", async (data) => {
  return data;
});

const testSlice = createSlice({
  name: "test",
  initialState,
  extraReducers: {
    [createTest.fulfilled]: (state, action) => {
      return { ...state, data: action.payload };
    },
  },
});

const { reducer } = testSlice;
export default reducer;
