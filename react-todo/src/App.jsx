import React from "react";
import TodoApp from "./pages/TodoApp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Other from "./pages/Other";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/app" element={<TodoApp />} />
      <Route path="/other" element={<Other />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
