import React from "react";

function CompleteTask({ data }) {
  return (
    <div
      className="flex-shrink-0 h-full w-[300px] p-5 
      bg-gradient-to-br from-gray-800 via-gray-900 to-black 
      rounded-2xl shadow-lg border border-gray-700 
      hover:shadow-2xl hover:border-gray-500 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3
          className="bg-blue-600/80 text-xs font-semibold 
          px-3 py-1 rounded-full tracking-wide text-white"
        >
          {data.category}
        </h3>
        <h4 className="text-xs text-gray-400">{data.taskDate}</h4>
      </div>

      {/* Title */}
      <h2 className="mt-5 text-xl font-bold text-white">
        {data.taskTitle}
      </h2>

      {/* Description */}
      <p className="text-sm mt-2 text-gray-300 leading-relaxed line-clamp-3">
        {data.taskDescription}
      </p>

      {/* Action Button */}
      <div className="mt-6">
        <button
          className="w-full bg-green-600 hover:bg-green-500 
          text-white rounded-lg font-medium py-2 px-3 text-sm 
          transition-all duration-200 shadow-md hover:shadow-green-500/30"
        >
          ✅ Completed
        </button>
      </div>
    </div>
  );
}

export default CompleteTask;
