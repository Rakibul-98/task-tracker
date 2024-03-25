/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import EditTaskForm from "../Forms/EditTaskForm";

export default function EditModal({ editModalId, task }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("taskList")) || [];
        setTasks(storedTasks);
    }, []);
    
    const updateTask = (updatedTask) => {
        const updatedTasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
        setTasks(updatedTasks);
        localStorage.setItem("taskList", JSON.stringify(updatedTasks));
    };

    return (
        <div>
            <dialog id={editModalId} className="modal">
                <div className="modal-box rounded-none p-0 w-5/12">
                    <div className="flex justify-between items-center py-2 px-4">
                        <h3 className="uppercase font-bold">edit task</h3>
                        <form method="dialog">
                            <button className="btn btn-xs btn-circle border-gray-500">✕</button>
                        </form>
                    </div>
                    <EditTaskForm onUpdate={updateTask} task={task}/>
                </div>
            </dialog>
        </div>
    )
}
