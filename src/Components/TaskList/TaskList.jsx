import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

function TaskList({ data }) {
  const AllData = JSON.parse(localStorage.getItem(data.role));
  const newData = AllData.find((elem) => elem.firstName === data.firstName);

  return (
    <div className="relative w-full h-[55%] mt-16 px-4">
      {/* Header */}
      <h2 className="text-xl font-semibold text-gray-100 mb-3 px-2">
        Your Tasks
      </h2>

      {/* Task container */}
      <div
        id="tasklist"
        className="flex gap-4 overflow-x-auto no-scrollbar py-3 px-1 
        
        rounded-2xl shadow-xl"
      >
        {newData.tasks.map((elem, idx) => {
          if (elem.active) {
            return (
              <div
                key={idx}
                className="flex-shrink-0 transition-transform transform hover:scale-105"
              >
                <AcceptTask data={elem} />
              </div>
            );
          }
          if (elem.newTask) {
            return (
              <div
                key={idx}
                className="flex-shrink-0 transition-transform transform hover:scale-105"
              >
                <NewTask data={elem} />
              </div>
            );
          }
          if (elem.completed) {
            return (
              <div
                key={idx}
                className="flex-shrink-0 transition-transform transform hover:scale-105"
              >
                <CompleteTask data={elem} />
              </div>
            );
          }
          if (elem.failed) {
            return (
              <div
                key={idx}
                className="flex-shrink-0 transition-transform transform hover:scale-105"
              >
                <FailedTask data={elem} />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default TaskList;
