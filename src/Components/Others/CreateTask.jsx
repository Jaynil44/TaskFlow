import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";

function CreateTask() {
  const { userData, setUserData } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const createdTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: true,
      newTask: true,
      failed: false,
      completed: false,
    };

    if (createdTask) {
      userData.employee_data.map((elem) => {
        if (asignTo === elem.firstName) {
          elem.tasks = [...elem.tasks, createdTask];
          elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
        }
      });

      setUserData(userData);
      localStorage.setItem("employees", JSON.stringify(userData.employee_data));

      setTaskTitle("");
      setCategory("");
      setAsignTo("");
      setTaskDate("");
      setTaskDescription("");
    }
  };

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <div
      className="p-6 bg-gray-900/80 backdrop-blur-lg mt-6 rounded-2xl 
       shadow-xl"
    >
      <h2 className="text-lg font-semibold text-emerald-400 mb-4">
        ✨ Create New Task
      </h2>

      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between gap-6"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-4">
          {/* Title */}
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none 
              bg-gray-800 border border-gray-600 focus:border-emerald-500 
              text-gray-100 placeholder-gray-400 transition"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          {/* Date */}
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none 
              bg-gray-800 border border-gray-600 focus:border-emerald-500 
              text-gray-100 placeholder-gray-400 transition"
              type="date"
            />
          </div>

          {/* Assign To */}
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign To</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none 
              bg-gray-800 border border-gray-600 focus:border-emerald-500 
              text-gray-100 placeholder-gray-400 transition"
              type="text"
              placeholder="Employee name"
            />
          </div>

          {/* Category */}
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none 
              bg-gray-800 border border-gray-600 focus:border-emerald-500 
              text-gray-100 placeholder-gray-400 transition"
              type="text"
              placeholder="Design, Dev, etc"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/5 flex flex-col items-start space-y-3">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-40 text-sm py-2 px-3 rounded-lg outline-none 
            bg-gray-800 border border-gray-600 focus:border-emerald-500 
            text-gray-100 placeholder-gray-400 transition"
            placeholder="Describe the task details..."
          ></textarea>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-500 
            text-white font-semibold py-3 px-5 rounded-lg text-sm w-full
            transition-transform transform hover:scale-105 
            shadow-md hover:shadow-emerald-500/30"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
