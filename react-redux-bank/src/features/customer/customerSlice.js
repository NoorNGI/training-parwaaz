import { createSlice } from "@reduxjs/toolkit";

// INITIAL STATE
const initialState = {
  fullName: "",
  pin: "",
  createdAt: "",
};

// // CUSTOMER SLICE
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare: (fullName, pin) => {
        return { payload: { fullName, pin } };
      },
      reducer: (state, action) => {
        state.fullName = action.payload.fullName;
        state.pin = action.payload.pin;
        state.createdAt = Date.now();
      },
    },
  },
});

export default customerSlice.reducer;
export const { createCustomer } = customerSlice.actions;
