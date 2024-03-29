/* eslint-disable react/prop-types */
import toast from 'react-hot-toast';
import TaskCard from '../TaskCard/TaskCard';
import { BiSad } from "react-icons/bi";

export default function TaskCategoryBody({ tasks, type }) {

  const handleConfirmDelete = (id) => {
    const tasks = JSON.parse(localStorage.getItem("taskList")) || [];
    const remainingTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem("taskList", JSON.stringify(remainingTasks));
    toast.error("Task deleted successfully");
    setTimeout(function () {
      location.reload();
    }, 300);
  }

  return (
    <div className='mb-3 pb-2'>
      {tasks.length ? (
        tasks.map(task => <TaskCard key={task.id} task={task} handleConfirmDelete={handleConfirmDelete} />)
      ) : (
        <div className="flex items-center justify-center min-h-[170px]">
          <div className='text-center text-red-500'>
            <p className='flex justify-center text-5xl'><BiSad /></p>
            <h3> <span className='font-bold text-lg'>{type}</span> <br /> task not found!!</h3>
          </div>
        </div>
      )}
    </div>
  )
}
