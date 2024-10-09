import React from "react";
import Checkmark from "./Checkmark";
import { MdDeleteSweep } from "react-icons/md";

function Todo({ todo, markTodoCompleted }) {
  return (
    <div className="todo-item py-4 px-2 flex items-center justify-between">
      <div
        onClick={() => {
          markTodoCompleted(todo.id);
          console.log("adf");
        }}
        className="flex gap-8 items-center"
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
      <MdDeleteSweep className="text-[#d62828] text-[20px] cursor-pointer" />
    </div>
  );
}

export default Todo;
