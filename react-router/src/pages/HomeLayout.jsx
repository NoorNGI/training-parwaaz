import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function HomeLayout() {
  return (
    <div>
      <header className="w-full flex items-center justify-between px-10 py-6 h-[10vh] shadow-2xl bg-stone-300">
        <p>Logo</p>
        <Navigation />
      </header>
      <main className="py-8 px-16 h-[90vh] bg-stone-100">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout;
