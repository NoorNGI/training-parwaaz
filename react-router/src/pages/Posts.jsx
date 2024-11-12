import React from "react";
import { Link } from "react-router-dom";

function Posts() {
  return (
    <section className="flex h-full w-full flex-col gap-4 items-center justify-center">
      <h2 className="text-2xl font-bold uppercase">Posts</h2>
      <div className="rounded bg-slate-300 h-[50%] w-[50%] px-8 py-4 flex items-center justify-center flex-col gap-8">
        <p className="text-center">We have variety of posts, do have a look!</p>
        <div className="flex items-center justify-center gap-4">
          <Link to={"/posts/1"}>
            <button className="bg-orange-500 rounded-full px-8 py-2 text-slate-100 shadow-md">
              Post 1
            </button>
          </Link>

          <Link to={"/posts/2"}>
            <button className="bg-orange-500 rounded-full px-8 py-2 text-slate-100 shadow-md">
              Post 2
            </button>
          </Link>

          <Link to={"/posts/3"}>
            <button className="bg-orange-500 rounded-full px-8 py-2 text-slate-100 shadow-md">
              Post 3
            </button>
          </Link>
        </div>

        <div>
          <Link to={"/not-found"}>
            <button className="bg-blue-400 rounded-lg py-3 px-6">
              Create a new Post
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Posts;
