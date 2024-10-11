import React, { useReducer } from "react";
import { accountInitialState, accountReducer } from "./reducers/accountReducer";

function App() {
  const [state, dispatch] = useReducer(accountReducer, accountInitialState);

  console.log(state);

  return (
    <div>
      <h1 className="heading">🏦 The React Bank ⚛️</h1>
      <div className="main">
        <h2>Deposit Money</h2>
        <div className="operation-row">
          <input
            className="operation-input"
            placeholder="Enter amount"
            type="number"
          />
          <button className="btn">Deoposit</button>
        </div>

        <h2>Withdraw Money</h2>
        <div className="operation-row">
          <input
            className="operation-input"
            placeholder="Enter amount"
            type="number"
          />
          <button className="btn">Withdraw</button>
        </div>

        <h2>Request Loan</h2>
        <div className="operation-row">
          <input
            className="operation-input"
            placeholder="Enter amount"
            type="number"
          />
          <input
            className="operation-input"
            placeholder="Enter loan purpose"
            type="text"
          />
          <button className="btn">Request</button>
        </div>

        {false && (
          <>
            <div className="operation-row">
              <p>you have to pay loan back</p>
              <button className="btn">Pay Loan</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
