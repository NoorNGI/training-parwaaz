import React, { useContext } from "react";
import PropTypes from "prop-types";

import { MdDeleteSweep } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { Context } from "../context/Context";

function Todo({ todo }) {
  const { handleMarkTodoCompleted, handleDeleteTodo } = useContext(Context);

  return (
    <div className="todo-item py-4 px-2 flex items-center justify-between hover:rounded-lg hover:bg-[#f4f4f2]">
      <div
        onClick={() => {
          handleMarkTodoCompleted(todo.id);
        }}
        className="flex gap-8 items-center cursor-pointer"
      >
        <div
          className={`w-6 h-6 cursor-pointer rounded-full border-2 border-[#d5d5d2] flex items-center justify-center ${
            todo.isCompleted ? "bg-[#d62828]" : ""
          }`}
        >
          {todo.isCompleted && <FaCheck className="text-[10px] text-white" />}
        </div>
        <p
          className={`text-[16px] ${
            todo.isCompleted ? "text-[14px] text-slate-400 line-through" : ""
          }`}
        >
          {todo.task}
        </p>
      </div>
      <MdDeleteSweep
        onClick={() => handleDeleteTodo(todo.id)}
        className="text-[#d62828] text-[20px] cursor-pointer"
      />
    </div>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
  // markTodoCompleted: PropTypes.func,
  // onDeleteTodo: PropTypes.func,
};

export default Todo;
