import { createSlice } from "@reduxjs/toolkit";

// /// INITIAL STATE
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  loading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      if (state.balance < action.payload) return state;

      state.balance -= action.payload;
    },
    requestLoan: {
      prepare: (amount, purpose) => {
        return { payload: { amount, purpose } };
      },
      reducer: (state, action) => {
        state.balance += action.payload.amount;
        state.loan += action.payload.amount;
        state.loanPurpose = action.payload.purpose;
      },
    },
    payLoan: (state) => {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
});

export const { withdraw, payLoan, requestLoan } = accountSlice.actions;

export const deposit = (amount, currency) => {
  console.log("async deposit");
  if (currency === "USD") return { type: "account/deposit", payload: amount };
  return async (dispatch) => {
    dispatch({ type: "account/currencyConverting" });

    try {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
      );
      const data = await res.json();

      dispatch({ type: "account/deposit", payload: data.rates.USD });
    } catch (err) {
      console.log(err);
    }
  };
};

export default accountSlice.reducer;
