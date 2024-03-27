import { useState } from "react";
import TaskCategoryCard from "./TaskCategoryCard"
import Sort from "./components/Sort";
import CreateTaskModal from "../modals/CreateTaskModal";
import FilterTask from "./components/FilterTask";

function TaskContainer() {
    const calculatedHeight = `calc(100vh - 150px)`;

    const taskCategory = [
        { id: 1, type: "Pending", bg: "bg-zinc-400" },
        { id: 2, type: "In Progress", bg: "bg-amber-500" },
        { id: 3, type: "Completed", bg: "bg-lime-600" },
        { id: 4, type: "Deployed", bg: "bg-violet-800" },
        { id: 5, type: "Deferred", bg: "bg-rose-300" }
    ]

    const tasks = JSON.parse(localStorage.getItem("taskList")) || [];
    const [sortedTasks, setSortedTasks] = useState(tasks);
    const [filterValue, setFilterValue] = useState({});

    const handleFilter = () =>{
        let filteredTasks = tasks;
  
        if (filterValue.assigneeName) {
            const filterByName = filteredTasks.filter(task => task.assignee.toLowerCase() === filterValue.assigneeName.toLowerCase());
            filteredTasks = filterByName;
        }

        if (filterValue.priority !== "Priority") {
            const filterByPriority = filteredTasks.filter(task => task.priority === filterValue.priority);
            filteredTasks = filterByPriority;
        }

        if (filterValue.dateRange.startDate && filterValue.dateRange.endDate) {
            const filterByDateRange = filteredTasks.filter(task => {
                const taskDueDate = new Date(task.startDate);
                return taskDueDate >= new Date(filterValue.dateRange.startDate) && taskDueDate <= new Date(filterValue.dateRange.endDate);
            });
            filteredTasks = filterByDateRange;
        }
        setSortedTasks(filteredTasks);
    };

    return (
        <div className="border-2 border-white shadow-md shadow-slate-400 rounded-xl p-5 w-full" style={{ minHeight: calculatedHeight }}>
            <div className="flex justify-between">
                <div className="col-span-3">
                    <FilterTask setFilterValue={setFilterValue} />
                </div>
                <button onClick={handleFilter} className="bg-orange-500 text-white py-[6px] px-10 text-sm">Apply Filter</button>
            </div>
            <div className="flex justify-between items-center">
                <Sort tasks={tasks} setSortedTasks={setSortedTasks} />
                <button onClick={() => document.getElementById('add-task-modal').showModal()} className="bg-sky-700 text-white py-[6px] w-72 text-sm">Add New Task</button>
                <CreateTaskModal />
            </div>
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