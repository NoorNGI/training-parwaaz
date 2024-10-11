import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Other from "./pages/Other";
import { TodosProvider } from "./context/TodosContext";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={
            <div>
              <Link
                className="bg-white rounded-xl py-4 px-12 shadow-md font-bold tracking-wide uppercase"
                to={"/app"}
              >
                Go to App
              </Link>
            </div>
          }
        />
        <Route
          path="/app"
          element={
            <TodosProvider>
              <Home />
            </TodosProvider>
          }
        />
        <Route path="/other" element={<Other />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
