/* eslint-disable react/prop-types */
import TaskCard from './TaskCard';

export default function TaskCategory({ tasks, type }) {

  return (
    <div>
      {tasks.length ? (
        tasks.map(task => <TaskCard key={task.id} task={task} />)
      ) : (
        <div className="flex items-center min-h-[200px] m-2">
          <div className="text-center">
            <h3 className="font-bold text-red-500">No {type} task found!!</h3>
            <p className="text-sm">Create new tasks to show.</p>
          </div>
        </div>
      )}
    </div>
  )
}
