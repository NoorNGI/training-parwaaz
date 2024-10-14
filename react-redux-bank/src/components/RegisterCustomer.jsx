import React, { useState } from "react";

function RegisterCustomer() {
  const [formState, setFormState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <div className="main">
      <h3>Enter Name</h3>
      <div className="operation-row">
        <input
          className="operation-input"
          placeholder="Enter Name"
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
      </div>

      <h3>Enter Pin</h3>
      <div className="operation-row">
        <input
          className="operation-input"
          placeholder="Enter PIN"
          type="number"
          name="pin"
          value={formState.pin}
          onChange={handleChange}
        />
      </div>

      <button className="btn btn-register">Register now</button>
    </div>
  );
}

export default RegisterCustomer;
