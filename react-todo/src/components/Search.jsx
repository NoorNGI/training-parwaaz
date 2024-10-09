import React, { useState } from "react";

function Search({ addTodo }) {
  const [task, setTask] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(task);

        setTask("");
      }}
      className="p-10 pb-5 border-b flex-grow-0"
    >
      <div className="w-full flex rounded-full bg-[#edede9]">
        <input
          type="text"
          placeholder="Add a item..."
          className="w-[75%] ml-6 py-3 bg-[transparent]"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          type="submit"
          className="w-[25%] bg-[#d62828] rounded-full text-bold text-white text-sm"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default Search;
