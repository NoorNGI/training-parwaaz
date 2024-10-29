import { combineReducers, createStore } from "redux";
import customerReducer from "./features/customer/customerSlice";
import accountReducer from "./features/account/accountSlice";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  customer: customerReducer,
  account: accountReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
