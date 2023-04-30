import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/", {replace : true});
  };
  return (
    <div className="container max-w-screen-2xl mx-auto min-h-[calc(100vh_-_200px)] md:min-h-[calc(100vh_-_220px)] text-center">
      <div className="flex flex-col items-center justify-center gap-y-4 mb-12">
        <span className="text-6xl font-bold text-[#f4715b]">404</span>
        <h1 className="text-2xl">Page not found :(</h1>
      </div>
      <button
        onClick={clickHandler}
        className="bg-[#f4715b] text-white px-5 py-2 rounded-lg font-bold">
        Back Home
      </button>
    </div>
  );
};

export default NotFound;
