/* eslint-disable react/prop-types */

import TaskCategory from "./TaskCategory";

function TaskCategoryCard({ taskCat }) {

  const { type, bg } = taskCat;
  const tasks = JSON.parse(localStorage.getItem("taskList")) || [];
  const matchingTasks = tasks.filter(task => task.status === type);

  return (
    <div className="bg-white rounded-b-lg rounded-t-lg w-full">
      <p className={`category-title ${bg} text-white text-center font-bold p-1 rounded-t-lg`}>{type}</p>
      <TaskCategory tasks={matchingTasks} type={type} />
    </div>
  )
}

export default TaskCategoryCard