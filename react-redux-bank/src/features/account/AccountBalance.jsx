import React from "react";
import { useSelector } from "react-redux";

function AccountBalance() {
  const balance = useSelector((store) => store.account.balance);

  return (
    <div className="balance">
      <p>$ {balance.toFixed("2")}</p>
    </div>
  );
}

export default AccountBalance;
