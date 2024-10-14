import React, { useReducer } from "react";
import { accountInitialState, accountReducer } from "./reducers/accountReducer";
import CustomerDetails from "./components/CustomerDetails";
import AccountOperations from "./components/AccountOperations";

function App() {
  const [state, dispatch] = useReducer(accountReducer, accountInitialState);

  console.log(state);

  return (
    <div>
      <h1 className="heading">🏦 The React Bank ⚛️</h1>
      <CustomerDetails />
      <AccountOperations />
    </div>
  );
}

export default App;
