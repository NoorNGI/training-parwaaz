import React, { useEffect, useState, createContext } from "react";
import { v4 as uuid } from "uuid";
import { httpRequest } from "../utils/api";

const Context = createContext();

function Provider({ children }) {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data = await httpRequest("/todos", "GET");

        data.reverse();

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

    const data = await httpRequest(`/todos/`, "POST", newTask);

    if (!data) return;

    setTodos((prev) => [newTask, ...prev]);
  };

  const handleMarkTodoCompleted = async function (id) {
    const [completedTodo] = todos.filter((todo) => todo.id === id);

    completedTodo.isCompleted = !completedTodo.isCompleted;

    let body = { isCompleted: completedTodo.isCompleted };

    const data = await httpRequest(`/todos/${id}`, "PATCH", body);

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
    const data = await httpRequest(`/todos/${id}`, "DELETE");

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

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { Provider, Context };
