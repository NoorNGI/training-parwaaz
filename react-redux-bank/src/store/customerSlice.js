import { createSlice } from "@reduxjs/toolkit";

const initialState = { customerName: "", customerPin: "" };
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
});

export const customerReducer = customerSlice.reducer;
