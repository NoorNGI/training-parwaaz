import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");

  const dispatch = useDispatch();

  const { loan: requestedLoan, loanPurpose: lpurpose } = useSelector(
    (store) => store.account
  );

  const handleDeposit = () => {
    if (depositAmount < 0 || !depositAmount)
      return alert("Deposit amount should be greater than 0");

    dispatch(deposit(depositAmount));

    setDepositAmount("");
  };

  const handleWithdraw = () => {
    if (withdrawAmount < 0 || !withdrawAmount)
      return alert("Withdraw amount should be greater than 0");

    dispatch(withdraw(withdrawAmount));

    setWithdrawAmount("");
  };
  const handleRequestLoan = () => {
    if (loanAmount < 0 || !loanAmount || !loanPurpose.length)
      return alert(
        "Loan amount should be greater than 0, also give the loan purpose."
      );

    dispatch(requestLoan(loanAmount, loanPurpose));

    setLoanAmount("");
    setLoanPurpose("");
  };

  const handlePayLoan = () => {
    dispatch(payLoan());
  };

  return (
    <>
      <h3 style={{ marginTop: "20px" }}>Your Account Operations</h3>
      <div className="main">
        <h3>Deposit Money</h3>
        <div className="operation-row">
          <input
            className="operation-input"
            placeholder="Enter amount"
            type="number"
            name="deposit"
            value={depositAmount}
            onChange={(e) => setDepositAmount(Number(e.target.value))}
          />
          <button className="btn" onClick={handleDeposit}>
            Deoposit
          </button>
        </div>

        <h3>Withdraw Money</h3>
        <div className="operation-row">
          <input
            className="operation-input"
            placeholder="Enter amount"
            type="number"
            name="withdraw"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(Number(e.target.value))}
          />
          <button className="btn" onClick={handleWithdraw}>
            Withdraw
          </button>
        </div>

        <h3>Request Loan</h3>
        <div className="operation-row">
          <input
            className="operation-input"
            placeholder="Enter amount"
            type="number"
            name="loan"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            disabled={requestedLoan > 0}
          />
          <input
            className="operation-input"
            placeholder="Enter loan purpose"
            type="text"
            name="loanPurpose"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            disabled={requestedLoan > 0}
          />
          <button
            className="btn"
            onClick={handleRequestLoan}
            disabled={requestedLoan > 0}
          >
            Request
          </button>
        </div>

        {requestedLoan > 0 && (
          <>
            <div className="operation-row">
              <p>
                you have taken a loan of ${requestedLoan} for "{lpurpose}"
              </p>
              <button className="btn" onClick={handlePayLoan}>
                Pay Loan
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AccountOperations;
