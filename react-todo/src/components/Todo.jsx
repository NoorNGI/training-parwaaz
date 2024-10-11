import React, { useContext } from "react";
import PropTypes from "prop-types";

import Checkmark from "./Checkmark";
import { MdDeleteSweep } from "react-icons/md";
import { TodosContext } from "../context/TodosContext";

function Todo({ todo }) {
  const { handleMarkTodoCompleted, handleDeleteTodo } =
    useContext(TodosContext);
  return (
    <div className="todo-item py-4 px-2 flex items-center justify-between hover:rounded-lg hover:bg-[#f4f4f2]">
      <div
        onClick={() => {
          handleMarkTodoCompleted(todo.id);
        }}
        className="flex gap-8 items-center cursor-pointer"
      >
        <Checkmark isCheck={todo.isCompleted} />
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
