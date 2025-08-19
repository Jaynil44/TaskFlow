import React from "react";

function TaskListNumbers({ data }) {
  const AllData = JSON.parse(localStorage.getItem(data.role));
  const newData = AllData.find((elem) => elem.firstName === data.firstName);

  return (
    <div className="mt-10 px-4">
      <div className="grid grid-cols-2 gap-6">
        {/* New Task */}
        <div
          className="rounded-2xl p-6 
          bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900
          shadow-lg border border-blue-500/30
          hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <h2 className="text-4xl font-bold text-white drop-shadow">
            {newData.taskCounts.newTask}
          </h2>
          <h3 className="text-lg font-medium text-blue-200">New Tasks</h3>
        </div>

        {/* Completed Task */}
        <div
          className="rounded-2xl p-6 
          bg-gradient-to-br from-green-600 via-green-700 to-green-900
          shadow-lg border border-green-500/30
          hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <h2 className="text-4xl font-bold text-white drop-shadow">
            {newData.taskCounts.completed}
          </h2>
          <h3 className="text-lg font-medium text-green-200">Completed</h3>
        </div>

        {/* Active Task */}
        <div
          className="rounded-2xl p-6 
          bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-800
          shadow-lg border border-yellow-400/30
          hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <h2 className="text-4xl font-bold text-black drop-shadow">
            {newData.taskCounts.active}
          </h2>
          <h3 className="text-lg font-medium text-yellow-100">Active</h3>
        </div>

        {/* Failed Task */}
        <div
          className="rounded-2xl p-6 
          bg-gradient-to-br from-red-600 via-red-700 to-red-900
          shadow-lg border border-red-500/30
          hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          <h2 className="text-4xl font-bold text-white drop-shadow">
            {newData.taskCounts.failed}
          </h2>
          <h3 className="text-lg font-medium text-red-200">Failed</h3>
        </div>
      </div>
    </div>
  );
}

export default TaskListNumbers;
