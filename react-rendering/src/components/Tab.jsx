import React from "react";

function Tab({ index, title, isActive, onTabClick }) {
  return (
    <button
      onClick={() => {
        onTabClick(index);
      }}
      className="tab"
      style={isActive ? { backgroundColor: "#3e4148", color: "white" } : {}}
    >
      {title}
    </button>
  );
}

export default Tab;
