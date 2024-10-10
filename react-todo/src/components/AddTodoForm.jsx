import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodoForm({ addTodo }) {
  const [task, setTask] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (!task) return;

        addTodo(task);

        setTask("");
      }}
      className="px-10 py-5 border-b flex-grow-0"
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

AddTodoForm.propTypes = {
  addTodo: PropTypes.func,
};

export default AddTodoForm;
