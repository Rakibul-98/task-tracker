/* eslint-disable react/prop-types */

import TaskCard from "./TaskCard"

function TaskCategoryCard({taskCat,tasks}) {

  const {type, bg} = taskCat;

  return (
    <div className="bg-white rounded-b-lg rounded-t-lg w-full">
      <p className={`category-title ${bg} text-white text-center font-bold p-3 rounded-t-lg`}>{type}</p>
      {
        tasks.length ? (
          tasks.map(task => <TaskCard key={task.id} task={task} />)
        ) : (
          <div className="text-center my-10">
            <h3 className="font-bold text-red-500">No task Found!!</h3>
            <p className="text-sm">Create new task to show.</p>
          </div>
        )
      }
    </div>
  )
}

export default TaskCategoryCard