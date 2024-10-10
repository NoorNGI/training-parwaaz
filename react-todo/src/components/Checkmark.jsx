import React from "react";
import { FaCheck } from "react-icons/fa6";
import PropTypes from "prop-types";

function Checkmark({ isCheck }) {
  return (
    <div
      className={`w-6 h-6 cursor-pointer rounded-full border-2 border-[#d5d5d2] flex items-center justify-center ${
        isCheck ? "bg-[#d62828]" : ""
      }`}
    >
      {isCheck && <FaCheck className="text-[10px] text-white" />}
    </div>
  );
}

export default Checkmark;

Checkmark.propTypes = {
  isCheck: PropTypes.bool.isRequired,
};
