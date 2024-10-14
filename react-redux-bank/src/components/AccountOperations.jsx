import React, { useState } from "react";

function AccountOperations() {
  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };
  return (
    <div className="main">
      <h3>Deposit Money</h3>
      <div className="operation-row">
        <input
          className="operation-input"
          placeholder="Enter amount"
          type="number"
          name="deposit"
          value={formState.deposit}
          onChange={handleChange}
        />
        <button className="btn">Deoposit</button>
      </div>

      <h3>Withdraw Money</h3>
      <div className="operation-row">
        <input
          className="operation-input"
          placeholder="Enter amount"
          type="number"
          name="withdraw"
          value={formState.withdraw}
          onChange={handleChange}
        />
        <button className="btn">Withdraw</button>
      </div>

      <h3>Request Loan</h3>
      <div className="operation-row">
        <input
          className="operation-input"
          placeholder="Enter amount"
          type="number"
          name="loan"
          value={formState.loan}
          onChange={handleChange}
        />
        <input
          className="operation-input"
          placeholder="Enter loan purpose"
          type="text"
          name="loanPurpose"
          value={formState.loanPurpose}
          onChange={handleChange}
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
  );
}

export default AccountOperations;
