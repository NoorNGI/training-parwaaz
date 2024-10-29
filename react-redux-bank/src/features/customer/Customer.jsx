import React from "react";
import RegisterCustomer from "./RegisterCustomer";
import { useSelector } from "react-redux";

function CustomerDetails() {
  const customer = useSelector((store) => store.customer.fullName);

  return (
    <div className="customer-details">
      <h2>👋 Welcome {customer}</h2>
    </div>
  );
}

export default CustomerDetails;
