import React, { useEffect, useState, createContext } from "react";
import { v4 as uuid } from "uuid";
import { makeHttpRequest } from "../utils/fetchData";

const TodosContext = createContext();

function TodosProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await makeHttpRequest({});

        setTodos(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  const handleAddTodo = async function (task) {
    const newTask = {
      id: uuid(),
      task,
      isCompleted: false,
    };

    const params = {
      id: "",
      method: "POST",
      body: newTask,
    };

    const data = await makeHttpRequest(params);

    if (!data) return;

    setTodos((prev) => [newTask, ...prev]);
  };

  const handleMarkTodoCompleted = async function (id) {
    const [completedTodo] = todos.filter((todo) => todo.id === id);

    completedTodo.isCompleted = !completedTodo.isCompleted;

    const params = {
      id,
      method: "PATCH",
      body: { isCompleted: completedTodo.isCompleted },
    };

    const data = await makeHttpRequest(params);

    if (!data) return;

    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) return completedTodo;
        else return todo;
      });
    });
  };

  const handleDeleteTodo = async function (id) {
    const params = {
      id,
      method: "DELETE",
    };
    const data = await makeHttpRequest(params);

    if (!data) return;

    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const value = {
    todos,
    isLoading,
    handleAddTodo,
    handleMarkTodoCompleted,
    handleDeleteTodo,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}

export { TodosProvider, TodosContext };