import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import { makeHttpRequest } from "./utils/fetchData";

function App() {
  const [todos, setTodos] = useState([]);

  /////////////////////////////////
  const handleAddTodo = async function (task) {
    const newTask = {
      id: uuid(),
      task,
      isCompleted: false,
    };

    const data = await makeHttpRequest("", "POST", newTask);

    if (!data) return;

    setTodos((prev) => [newTask, ...prev]);
  };

  const handleMarkTodoCompleted = async function (id) {
    const [completedTodo] = todos.filter((todo) => todo.id === id);

    completedTodo.isCompleted = !completedTodo.isCompleted;

    const data = await makeHttpRequest(id, "PATCH", {
      isCompleted: completedTodo.isCompleted,
    });

    if (!data) return;

    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) return completedTodo;
        else return todo;
      });
    });
  };

  const handleDeleteTodo = async function (id) {
    const data = await makeHttpRequest(id, "DELETE");

    if (!data) return;

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    console.log(data);
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/todos");
  //     const data = await response.json();
  //     console.log(data);

  //     data.reverse();

  //     setTodos(data);
  //   } catch (err) {
  //     console.log(err, "something went wrong!");
  //   }
  // };

  // fetchData();

  /////////////////////////////////

  useEffect(() => {
    const fetch = async () => {
      const data = await makeHttpRequest();

      setTodos(data);
    };
    fetch();
  }, []);

  return (
    <main className="flex flex-col min-h-[500px] max-h-[500px] bg-white w-[500px] rounded-3xl shadow-lg overflow-hidden">
      <Search addTodo={handleAddTodo} />

      <div className="p-10 pt-5 flex-grow overflow-auto">
        <TodoList
          todos={todos}
          markTodoCompleted={handleMarkTodoCompleted}
          onDeleteTodo={handleDeleteTodo}
        />
      </div>
    </main>
  );
}

export default App;
