import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

function TodoList({ todos, markTodoCompleted, onDeleteTodo }) {
  return (
    <>
      {!todos.length && (
        <div className="h-[100%] flex items-center justify-center px-8">
          <h1 className="text-3xl text-slate-500 font-bold text-center">
            No TODOS found! Try adding some :)
          </h1>
        </div>
      )}
      {todos?.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          markTodoCompleted={markTodoCompleted}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
  markTodoCompleted: PropTypes.func,
  onDeleteTodo: PropTypes.func,
};

export default TodoList;
