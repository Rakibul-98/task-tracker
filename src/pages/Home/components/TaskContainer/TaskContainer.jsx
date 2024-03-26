import { useState } from "react";
import TaskCategoryCard from "./TaskCategoryCard"
import Sort from "./components/Sort";
import CreateTaskModal from "../modals/CreateTaskModal";
import FilterTask from "./components/FilterTask";
function TaskContainer() {

    const taskCategory = [
        { id: 1, type: "Pending", bg: "bg-gray-400" },
        { id: 2, type: "In Progress", bg: "bg-yellow-500" },
        { id: 3, type: "Completed", bg: "bg-green-500" },
        { id: 4, type: "Deployed", bg: "bg-violet-700" },
        { id: 5, type: "Deffered", bg: "bg-rose-300" }
    ]

    const tasks = JSON.parse(localStorage.getItem("taskList")) || [];
    const [sortedTasks, setSortedTasks] = useState(tasks);

    return (
        <div className="border-2 border-white shadow-md shadow-slate-400 rounded-xl p-5 w-full min-h-[450px]">
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <FilterTask tasks={tasks} />
                </div>
                <button onClick={() => document.getElementById('add-task-modal').showModal()} className="bg-blue-500 text-white px-8 text-sm">Add New Task</button>
                <CreateTaskModal />
            </div>
            <Sort tasks={tasks} setSortedTasks={setSortedTasks} />
            {/* <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <FilterTask tasks={tasks} />
                    <Sort tasks={tasks} setSortedTasks={setSortedTasks} />
                </div>
                <div className=" text-right">
                    <button onClick={() => document.getElementById('add-task-modal').showModal()} className="bg-blue-500 text-white py-1 px-8 text-sm col-span-2">Add New Task</button>
                    <CreateTaskModal />
                </div>
            </div> */}
            <div className="flex justify-between gap-3">
                {
                    taskCategory.map(taskCat =>
                        <TaskCategoryCard key={taskCat.id} taskCat={taskCat} tasks={sortedTasks}></TaskCategoryCard>
                    )
                }
            </div>
        </div>
    )
}

export default TaskContainer