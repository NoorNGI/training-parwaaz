import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function RegisterCustomer() {
  const [fullName, setFullName] = useState("");
  const [pin, setPin] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName) return alert("Please provide your fullName");

    dispatch(createCustomer(fullName, pin));
    setFullName("");
    setPin("");
  };

  return (
    <>
      <h3 style={{ marginTop: "20px" }}>Register a new Account</h3>

      <form className="main" onSubmit={handleSubmit}>
        <h3>Enter Name</h3>
        <div className="operation-row">
          <input
            className="operation-input"
            placeholder="Enter Name"
            type="text"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <h3>Enter Pin</h3>
        <div className="operation-row">
          <input
            className="operation-input"
            placeholder="Enter PIN"
            type="number"
            name="pin"
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
            }}
          />
        </div>

        <button className="btn btn-register" type="submit">
          Register now
        </button>
      </form>
    </>
  );
}

export default RegisterCustomer;
