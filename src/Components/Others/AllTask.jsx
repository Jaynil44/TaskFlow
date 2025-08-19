import React from "react";

function AllTask() {
  const allUsers = JSON.parse(localStorage.getItem("employees"));
  if (!allUsers) return null;

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-200">📊 Employee Task Overview</h2>

      {/* Header */}
      <div className="grid grid-cols-5 bg-gray-800 text-gray-200 p-3 rounded-lg font-semibold">
        <div className="text-left">Employee Name</div>
        <div className="text-center">New Task</div>
        <div className="text-center">Active</div>
        <div className="text-center">Completed</div>
        <div className="text-center">Failed</div>
      </div>

      {/* Rows */}
      {allUsers.map((elem, idx) => (
        <div
          key={idx}
          className="grid grid-cols-5 p-3 mt-2 rounded-lg bg-gray-900 text-center items-center hover:bg-gray-800 transition"
        >
          <div className="text-left font-medium text-white">{elem.firstName}</div>
          <div className="font-medium text-blue-400">{elem.taskCounts.newTask}</div>
          <div className="font-medium text-yellow-400">{elem.taskCounts.active}</div>
          <div className="font-medium text-green-400">{elem.taskCounts.completed}</div>
          <div className="font-medium text-red-500">{elem.taskCounts.failed}</div>
        </div>
      ))}
    </div>
  );
}

export default AllTask;
