import React from "react";
import RegisterCustomer from "./RegisterCustomer";

function CustomerDetails() {
  return (
    <div className="customer-details">
      <h2>👋 Welcome {"customer"} to your account</h2>
      <RegisterCustomer />
    </div>
  );
}

export default CustomerDetails;
