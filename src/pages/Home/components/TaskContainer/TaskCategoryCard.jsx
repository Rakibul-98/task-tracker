/* eslint-disable react/prop-types */
import TaskCategoryBody from "./TaskCategoryBody";

function TaskCategoryCard({ taskCat, tasks, activeModal, setActiveModal }) {
  const { type, bg } = taskCat;
  const matchingTasks = tasks.filter(task => task.status === type);

  return (
    <div className="bg-white rounded-b-lg rounded-t-lg w-full h-fit">
      <p className={`category-title ${bg} text-white text-center font-bold p-1 rounded-t-lg`}>{type}</p>
      <TaskCategoryBody
        tasks={matchingTasks}
        type={type}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
    </div>
  );
}

export default TaskCategoryCard;
