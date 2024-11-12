import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();

    const goBack = () => {
      navigate(-1)
    }

  return (
    <div className="h-[100vh] flex items-center justify-center bg-slate-600 text-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-bold text-3xl">Page Not Found</h1>
        <button className="bg-white text-black px-6 py-2 rounded-xl shadow-lg border-2 border-white hover:bg-transparent hover:text-white" onClick={goBack} >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default PageNotFound;
