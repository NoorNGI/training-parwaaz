import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link
        className="bg-white rounded-xl py-4 px-12 shadow-md font-bold tracking-wide uppercase"
        to={"/app"}
      >
        Go to App
      </Link>
    </div>
  );
}

export default Home;
