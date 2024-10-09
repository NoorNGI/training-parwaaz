import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import Search from "./components/Search";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  /////////////////////////////////
  const handleAddTodo = function (task) {
    const newTask = {
      id: uuid(),
      task,
      isCompleted: false,
    };

    setTodos((prev) => [newTask, ...prev]);

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });

    console.log(newTask);
  };

  const handleMarkTodoCompleted = function (id) {
    const [completedTodo] = todos.filter((todo) => todo.id === id);
    completedTodo.isCompleted = !completedTodo.isCompleted;

    console.log(completedTodo);

    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: !completedTodo.isCompleted }),
    })
      .then(() => {
        setTodos((prev) => {
          return prev.map((todo) => {
            if (todo.id === id) return completedTodo;
            else return todo;
          });
        });
      })
      .catch((err) => console.log(err));
  };

  /////////////////////////////////

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const data = await response.json();

        setTodos(data);
      } catch (err) {
        console.log(err, "something went wrong!");
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex flex-col min-h-[500px] max-h-[500px] bg-white w-[500px] rounded-3xl shadow-lg overflow-hidden">
      <Search addTodo={handleAddTodo} />

      <div className="p-10 pt-5 flex-grow overflow-auto">
        <TodoList todos={todos} markTodoCompleted={handleMarkTodoCompleted} />
      </div>
    </main>
  );
}

export default App;
