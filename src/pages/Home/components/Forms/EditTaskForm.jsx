/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function EditTaskForm({ task, onUpdate }) {

    const { register, handleSubmit, reset } = useForm({ defaultValues: task });

    const onSubmit = (data) => {
        let updatedTask = {
            ...task,
            priority: data.priority,
            status: data.status
        };

        if (data.status === "Completed") {
            updatedTask = {
                ...updatedTask,
                endDate: new Date()
            };
        }
        else {
            updatedTask = {
                ...updatedTask,
                endDate: ""
            };
        }

        onUpdate(updatedTask);
        reset();
        toast.success('Task updated successfully!');
        setTimeout(function () {
            location.reload();
        }, 300);
    };

    const handleReset = () => {
        reset({
            ...task,
            priority: 0,
            status: ""
        });
        toast.success('Form reset successful!');
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-gradient-to-br from-fuchsia-200 to-violet-200 p-5 form-control">
                    <label>Title:</label>
                    <input className="col-span-3 py-1 mt-1 mb-3 px-2 rounded-md bg-stone-300 border border-gray-400 outline-none text-gray-500" type="text" value={task.title} disabled />
                    <label>Description:</label>
                    <textarea className="col-span-3 py-1 mt-1 mb-3 px-2 rounded-md bg-stone-300 border border-gray-400 outline-none text-gray-500" type="text" value={task.description} disabled />
                    <label>Team:</label>
                    <input className="col-span-3 py-1 mt-1 mb-3 px-2 rounded-md bg-stone-300 border border-gray-400 outline-none text-gray-500" type="text" value={task.team} disabled />
                    <label>Assignee:</label>
                    <input className="col-span-3 py-1 px-2 mt-1 rounded-md bg-stone-300 border border-gray-400 outline-none text-gray-500" type="text" value={task.assignee} disabled />
                    <div className="flex justify-between mt-5">
                        <div className="flex items-center">
                            <label>Priority: </label>
                            <select className="select select-sm focus:outline-none ms-2 rounded-md border border-gray-400" {...register("priority")} required>
                                <option defaultValue="P0">P0</option>
                                <option value="P1">P1</option>
                                <option value="P2">P2</option>
                            </select>
                        </div>
                        <div>
                            <label>Status: </label>
                            <select className="select select-sm focus:outline-none ms-2 rounded-md border border-gray-400" {...register("status")} required>
                                <option value="Completed">Completed</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Pending">Pending</option>
                                <option value="Deployed" >Deployed</option>
                                <option value="Deferred" >Deferred</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-5 p-5">
                    <input className="bg-sky-700 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md" type="submit" value="Update" />
                    <button type="button" onClick={handleReset} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md">Reset</button>
                </div>
            </form>
        </div>
    );
}
