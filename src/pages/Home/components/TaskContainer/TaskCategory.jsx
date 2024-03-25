/* eslint-disable react/prop-types */
import toast from 'react-hot-toast';
import TaskCard from '../TaskCard/TaskCard';

export default function TaskCategory({ tasks, type }) {

  const handleConfirmDelete = (id) =>{
    const tasks = JSON.parse(localStorage.getItem("taskList")) ||[];
    const remainingTasks = tasks.filter(task => task.id!== id);
    localStorage.setItem("taskList", JSON.stringify(remainingTasks));
    toast.success("Task deleted successfully");
    setTimeout(function(){
      location.reload();
  }, 500);
  }

  return (
    <div>
      {tasks.length ? (
        tasks.map(task => <TaskCard key={task.id} task={task} handleConfirmDelete={handleConfirmDelete}/>)
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
