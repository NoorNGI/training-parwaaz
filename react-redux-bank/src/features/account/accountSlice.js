import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// /// INITIAL STATE
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  loading: false,
};

export const deposit = createAsyncThunk(
  "account/deposit",
  async ({ amount, currency }) => {
    try {
      if (currency === "USD") return amount;
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
      );

      if (!res.ok) throw new Error("response interrupted!");

      const data = await res.json();

      const convertedAmount = data.rates.USD;

      return convertedAmount;
    } catch (err) {
      console.log(err);
    }
  }
);

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    // deposit: (state, action) => {
    //   state.balance += action.payload;
    // },
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
  extraReducers: (builder) => {
    builder
      .addCase(deposit.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deposit.fulfilled, (state, action) => {
        state.balance += action.payload;
        state.loading = false;
      })
      .addCase(deposit.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { withdraw, payLoan, requestLoan } = accountSlice.actions;

// export const deposit = (amount, currency) => {
//   console.log("async deposit");
//   if (currency === "USD") return { type: "account/deposit", payload: amount };
//   return async (dispatch) => {
//     dispatch({ type: "account/currencyConverting" });

//     try {
//       const res = await fetch(
//         `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//       );
//       const data = await res.json();

//       dispatch({ type: "account/deposit", payload: data.rates.USD });
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

export default accountSlice.reducer;
