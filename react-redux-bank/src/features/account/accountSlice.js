import { createStore } from "redux";

// /// INITIAL STATE
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

// /// ACCOUNT REDUCER FUNCTION
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw": {
      if (state.balance < action.payload) return state;

      return { ...state, balance: state.balance - action.payload };
    }
    case "account/requestLoan":
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        loanPurpose: action.payload.loanPurpose,
      };
    case "account/payLoan": {
      if (state.loan > state.balance) return state;

      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    }
    default:
      return state;
  }
}

// /// ACTION CREATORS
export const deposit = (amount) => {
  return { type: "account/deposit", payload: amount };
};

export const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};

export const requestLoan = (amount, purpose) => {
  return {
    type: "account/requestLoan",
    payload: { amount, loanPurpose: purpose },
  };
};

export const payLoan = () => {
  return { type: "account/payLoan" };
};
