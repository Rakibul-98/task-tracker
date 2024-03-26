import { useState } from "react";
import CreateTaskForm from "../Forms/CreateTaskForm"
import TaskCategoryCard from "./TaskCategoryCard"

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

    const handleSort = (by) => {
        if (by === "date") {
            const sortedByDate = tasks.slice().sort((a, b) => a.createdDate - b.createdDate);
            setSortedTasks(sortedByDate);
        }
        else if (by === "priority") {
            const sortedByPriority = tasks.slice().sort((a, b) => parseInt(a.priority.substring(1)) - parseInt(b.priority.substring(1)));
            setSortedTasks(sortedByPriority);
        }
    }


    return (
        <div className="border-2 border-white shadow-md shadow-slate-400 rounded-xl p-5 w-full min-h-[450px]">
            <div className="grid grid-cols-8">
                <div className="col-span-6 flex gap-5">
                    <p>Filter By:</p>
                    <input className="outline-none" type="text" name="name" id="" placeholder="Assignee Name" />
                    <select id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <input type="date" name="date" id="" />
                </div>
                <button onClick={() => document.getElementById('my_modal_3').showModal()} className="bg-blue-500 text-white px-8 text-sm col-span-2">Add New Task</button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box rounded-none p-0 w-5/12">
                        <div className="flex justify-between items-center py-2 px-4">
                            <h3 className="uppercase font-bold">create task</h3>
                            <form method="dialog">
                                <button className="btn btn-xs btn-circle border-gray-500">✕</button>
                            </form>
                        </div>
                        <CreateTaskForm />
                    </div>
                </dialog>
            </div>
            <div className="flex gap-5 py-4">
                <p>Sort By:</p>
                <select className="select select-sm focus:outline-none ms-2 rounded-md text-gray-500" onChange={(e) => handleSort(e.target.value)}>
                    <option>Select</option>
                    <option value="priority">Priority</option>
                    <option value="date">Date</option>
                </select>
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