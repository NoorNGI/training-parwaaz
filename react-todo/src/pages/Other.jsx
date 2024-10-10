import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Other() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-center">Other Page</h1>
      <Link
        className="block bg-white py-2 px-6 rounded-lg"
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </Link>
    </div>
  );
}

export default Other;
