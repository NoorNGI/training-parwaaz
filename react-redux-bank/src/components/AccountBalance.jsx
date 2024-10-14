import React from "react";
import { useSelector } from "react-redux";

function AccountBalance() {
  const balance = useSelector((state) => state.account.balance);
  return (
    <div className="balance">
      <p>${balance}</p>
    </div>
  );
}

export default AccountBalance;
