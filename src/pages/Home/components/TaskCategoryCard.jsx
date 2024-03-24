/* eslint-disable react/prop-types */

import TaskCard from "./TaskCard"

function TaskCategoryCard({task}) {

  const {type, bg} = task;

  return (
    <div className="bg-white rounded-b-lg rounded-t-lg w-full">
      <p className={`category-title ${bg} text-white text-center font-bold p-3 rounded-t-lg`}>{type}</p>
      <TaskCard />
      <TaskCard/>
    </div>
  )
}

export default TaskCategoryCard