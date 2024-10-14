import React, { useReducer } from "react";
import CustomerDetails from "./components/CustomerDetails";
import AccountOperations from "./components/AccountOperations";
import AccountBalance from "./components/AccountBalance";

function App() {
  // const [state, dispatch] = useReducer(accountReducer, accountInitialState);

  return (
    <div>
      <h1 className="heading">🏦 The React Bank ⚛️</h1>
      <AccountBalance />
      <CustomerDetails />
      <AccountOperations />
    </div>
  );
}

export default App;
