import React from "react";
import Checkmark from "./Checkmark";
import { MdDeleteSweep } from "react-icons/md";

function Todo({ todo, markTodoCompleted, onDeleteTodo }) {
  return (
    <div className="todo-item py-4 px-2 flex items-center justify-between hover:rounded-lg hover:bg-[#f4f4f2]">
      <div
        onClick={() => {
          markTodoCompleted(todo.id);
          console.log("adf");
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
        onClick={() => onDeleteTodo(todo.id)}
        className="text-[#d62828] text-[20px] cursor-pointer"
      />
    </div>
  );
}

export default Todo;
