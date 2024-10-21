import React, { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import { httpRequest } from "../utils/api";
import { Link } from "react-router-dom";

function TodoApp() {
  // const [todos, setTodos] = useState([]);

  // /////////////////////////////////
  // const handleAddTodo = async function (task) {
  //   const newTask = {
  //     id: uuid(),
  //     task,
  //     isCompleted: false,
  //   };

  //   const data = await httpRequest("", "POST", newTask);

  //   if (!data) return;

  //   setTodos((prev) => [newTask, ...prev]);
  // };

  // const handleMarkTodoCompleted = async function (id) {
  //   const [completedTodo] = todos.filter((todo) => todo.id === id);

  //   completedTodo.isCompleted = !completedTodo.isCompleted;

  //   const params = {
  //     id,
  //     method: "PATCH",
  //     body: { isCompleted: completedTodo.isCompleted },
  //   };

  //   const data = await httpRequest(params);

  //   if (!data) return;

  //   setTodos((prev) => {
  //     return prev.map((todo) => {
  //       if (todo.id === id) return completedTodo;
  //       else return todo;
  //     });
  //   });
  // };

  // const handleDeleteTodo = async function (id) {
  //   const data = await httpRequest(id, "DELETE");

  //   if (!data) return;

  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));
  // };

  // /////////////////////////////////

  // useEffect(() => {
  //   const fetch = async () => {
  //     try {
  //       const data = await httpRequest({});

  //       setTodos(data);
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   };
  //   fetch();
  // }, []);

  return (
    <>
      <main className="flex flex-col min-h-[500px] max-h-[500px] bg-white w-[500px] rounded-3xl shadow-lg overflow-hidden">
        <h1 className="m-0 pt-5 px-8 text-xl font-bold uppercase text-[#333333]">
          Todo List 📒
        </h1>
        {/* <AddTodoForm addTodo={handleAddTodo} /> */}
        <AddTodoForm />

        <div className="p-10 pt-5 flex-grow overflow-auto todo-list-container">
          {/* <TodoList
            todos={todos}
            markTodoCompleted={handleMarkTodoCompleted}
            onDeleteTodo={handleDeleteTodo}
          /> */}
          <TodoList />
        </div>
      </main>
      <Link className="text-center mt-6 block" to="/other">
        Go to other page
      </Link>
    </>
  );
}

export default TodoApp;
