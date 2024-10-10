import React from "react";
import Todo from "./Todo";

function TodoList({ todos, markTodoCompleted, onDeleteTodo }) {
  return (
    <div>
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          markTodoCompleted={markTodoCompleted}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
