import React from "react";

const Empty = ({ message }) => {
  return (
    <div className="w-full h-[50vh] text-center flex items-center justify-center rounded-2xl">
      <h1 className="text-gray-500 text-xl font-extrabold capitalize">
        {message || "No items found 💔"}
      </h1>
    </div>
  );
};

export default Empty;
