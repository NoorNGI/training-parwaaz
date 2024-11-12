import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function Post() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <section className="h-[80vh] flex items-center justify-center relative bg-slate-100">
      <div className="w-[50%] text-center">
        <h1 className="mb-4 text-xl">Post# {id}</h1>
        <p>
          This is post number {id}, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Animi odio sed quis ipsum? Ad sint architecto omnis
          quasi aliquam similique ratione, officiis consectetur minima quis,
          sapiente ullam, ipsam quo voluptatum!
        </p>
      </div>

      <button className="absolute top-4 left-4" onClick={() => navigate(-1)}>
        <IoArrowBackCircleSharp className="text-3xl" />
      </button>
    </section>
  );
}

export default Post;
