import React, { useReducer } from "react";
import Customer from "./features/customer/Customer";
import AccountOperations from "./features/account/AccountOperations";
import AccountBalance from "./features/account/AccountBalance";
import RegisterCustomer from "./features/customer/RegisterCustomer";
import "./features/account/accountSlice";
import "./features/customer/customerSlice";
import { useSelector } from "react-redux";

function App() {
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);
  return (
    <div>
      <h1 className="heading">🏦 The React Bank ⚛️</h1>
      {!customer.length ? (
        <RegisterCustomer />
      ) : (
        <>
          <AccountBalance />
          <Customer />
          <AccountOperations />
        </>
      )}
    </div>
  );
}

export default App;
