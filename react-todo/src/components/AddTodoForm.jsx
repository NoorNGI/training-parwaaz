import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../context/Context";

function AddTodoForm({ addTodo }) {
  const [task, setTask] = useState("");
  const { handleAddTodo } = useContext(Context);

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (!task) return;

    handleAddTodo(task);

    setTask("");
  };

  return (
    <form
      onSubmit={handleSubmitForm}
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
