import { useState } from "react";
import TaskCategoryCard from "./TaskCategoryCard";
import Sort from "./components/Sort";
import CreateTaskModal from "../modals/CreateTaskModal";
import FilterTask from "./components/FilterTask";

function TaskContainer() {
    const calculatedHeight = `calc(100vh - 150px)`;
    const tasks = JSON.parse(localStorage.getItem("taskList")) || [];
    const [sortedTasks, setSortedTasks] = useState(tasks);
    const [filterValue, setFilterValue] = useState({});
    const [activeModal, setActiveModal] = useState(null);

    const taskCategory = [
        { id: 1, type: "Pending", bg: "bg-zinc-400" },
        { id: 2, type: "In Progress", bg: "bg-amber-500" },
        { id: 3, type: "Completed", bg: "bg-lime-600" },
        { id: 4, type: "Deployed", bg: "bg-violet-800" },
        { id: 5, type: "Deferred", bg: "bg-rose-300" }
    ];

    const handleFilter = () => {
        let filteredTasks = tasks;

        if (filterValue.assigneeName) {
            filteredTasks = filteredTasks.filter(task => task.assignee.toLowerCase() === filterValue.assigneeName.toLowerCase());
        }

        if (filterValue.priority !== "Priority") {
            filteredTasks = filteredTasks.filter(task => task.priority === filterValue.priority);
        }

        if (filterValue.dateRange.startDate && filterValue.dateRange.endDate) {
            filteredTasks = filteredTasks.filter(task => {
                const taskDueDate = new Date(task.startDate);
                return taskDueDate >= new Date(filterValue.dateRange.startDate) && taskDueDate <= new Date(filterValue.dateRange.endDate);
            });
        }
        setSortedTasks(filteredTasks);
    };

    return (
        <div className="border-2 border-white shadow-md shadow-slate-400 rounded-xl p-5 w-full" style={{ minHeight: calculatedHeight }}>
            <div className="md:flex justify-between gap-5">
                <div>
                    <FilterTask setFilterValue={setFilterValue} />
                </div>
                <button onClick={handleFilter} className="bg-orange-500 w-full md:max-w-fit text-white py-[6px] md:px-5 text-sm">Apply Filter</button>
            </div>
            <div className="md:flex md:my-5 justify-between items-center">
                <Sort tasks={tasks} setSortedTasks={setSortedTasks} />
                <button
                    onClick={() => document.getElementById('add-task-modal').showModal()}
                    className="bg-sky-700 text-white py-[6px] w-full mb-5 md:mb-0 md:w-72 text-sm">
                    Add New Task
                </button>
                <CreateTaskModal />
            </div>
            <div className="lg:flex md:grid grid-cols-2 justify-between gap-3">
                {
                    taskCategory.map(taskCat =>
                        <TaskCategoryCard
                            key={taskCat.id}
                            taskCat={taskCat}
                            tasks={sortedTasks}
                            activeModal={activeModal}
                            setActiveModal={setActiveModal}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default TaskContainer;
