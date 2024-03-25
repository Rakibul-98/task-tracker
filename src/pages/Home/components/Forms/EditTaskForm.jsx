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
                completedDate: new Date().toLocaleString()
            };
        }
        else{
            updatedTask = {
                ...updatedTask,
                completedDate: null
            };
        }

        onUpdate(updatedTask);
        reset();
        toast.success('Task updated successfully!');
        setTimeout(function(){
            location.reload();
        }, 500);
    };

    const handleReset = () => {
        reset(task);
        toast.success('Form reset successful!');
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-fuchsia-200 p-5 form-control">
                    <label>Title:</label>
                    <input className="col-span-3 py-1 mt-1 mb-3 px-2 rounded-md bg-gray-200 border border-gray-400 outline-none text-gray-500" type="text" value={task.title} disabled />
                    <label>Description:</label>
                    <textarea className="col-span-3 py-1 mt-1 mb-3 px-2 rounded-md bg-gray-200 border border-gray-400 outline-none text-gray-500" type="text" value={task.description} disabled />
                    <label>Team:</label>
                    <input className="col-span-3 py-1 mt-1 mb-3 px-2 rounded-md bg-gray-200 border border-gray-400 outline-none text-gray-500" type="text" value={task.team} disabled />
                    <label>Assignee:</label>
                    <input className="col-span-3 py-1 px-2 mt-1 rounded-md bg-gray-200 border border-gray-400 outline-none text-gray-500" type="text" value={task.assignee} disabled />
                    <div className="flex justify-between mt-5">
                        <div className="flex items-center">
                            <label>Priority: </label>
                            <select {...register("priority")} required>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div>
                            <label>Status: </label>
                            <input className="w-[100px] py-1 px-2 rounded-md border border-gray-400 outline-none" type="text" {...register("status")} required />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-5 p-5">
                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md" type="submit" />
                    <button type="button" onClick={handleReset} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md">Reset</button>
                </div>
            </form>
        </div>
    );
}
