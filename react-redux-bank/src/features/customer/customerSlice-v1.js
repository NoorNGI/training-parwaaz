import { createStore } from "redux";

const initialState = {
  fullName: "",
  pin: "",
  createdAt: "",
};

// /// CUSTOMER REDUCER FUNCTION
export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        pin: action.payload.pin,
        createdAt: Date.now(),
      };

    default:
      return state;
  }
}

// /// ACTION CREATORS
export const createCustomer = (fullName, pin) => {
  return { type: "customer/createCustomer", payload: { fullName, pin } };
};
