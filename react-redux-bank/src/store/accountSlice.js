import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducer: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.paload;
    },
    loan: (state, action) => {
      state.loan = action.payload.loan;
      state.loanPurpose = action.payload.loanPurpose;
    },
  },
});

export const accountReducer = accountSlice.reducer;
