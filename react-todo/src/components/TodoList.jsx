import React, { useContext } from "react";
// import PropTypes from "prop-types";
import Todo from "./Todo";
import { TodosContext } from "../context/TodosContext";

function TodoList() {
  const { isLoading, todos } = useContext(TodosContext);

  if (isLoading)
    return (
      <div className="h-[100%] flex items-center justify-center px-8">
        <h1 className="text-md text-slate-500 font-bold text-center">
          Loading...
        </h1>
      </div>
    );

  if (!todos.length)
    return (
      <div className="h-[100%] flex items-center justify-center px-8">
        <h1 className="text-3xl text-slate-500 font-bold text-center">
          No TODOS found! Try adding some :)
        </h1>
      </div>
    );

  return (
    <>
      {todos?.map((todo) => (
        //   <Todo
        //   key={todo.id}
        //   todo={todo}
        //   markTodoCompleted={markTodoCompleted}
        //   onDeleteTodo={onDeleteTodo}
        // />
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
}

// TodoList.propTypes = {
//   todos: PropTypes.array,
//   markTodoCompleted: PropTypes.func,
//   onDeleteTodo: PropTypes.func,
// };

export default TodoList;
