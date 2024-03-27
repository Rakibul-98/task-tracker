/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"


function CreateTaskForm() {

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        const newTask = {
            id: Math.floor(Math.random() * 1000000000),
            title: data.title,
            description: data.description,
            team: data.team,
            assignee: data.assignee,
            priority: data.priority,
            status: "Pending",
            startDate: new Date(),
            endDate:""
        }
        const existingTasks = JSON.parse(localStorage.getItem("taskList")) || [];
        existingTasks.push(newTask);
        localStorage.setItem("taskList", JSON.stringify(existingTasks));
        reset();
        toast.success('New task created successfully!');
        setTimeout(function(){
            location.reload();
        }, 300);
    }

    const handleReset = () => {
        reset()
        toast.success('Form reset successful!');
    };

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" bg-gradient-to-br from-fuchsia-200 to-violet-200 p-5">
                    <div className="grid grid-cols-4 mb-3">
                        <label>Title:</label>
                        <input className=" col-span-3 py-1 px-2 rounded-md bg-gray-50 border border-gray-400 outline-none" type="text" {...register("title")} required />
                    </div>
                    <div className="grid grid-cols-4 mb-3">
                        <label>Description:</label>
                        <textarea className=" col-span-3 py-1 px-2 rounded-md bg-gray-50 border border-gray-400 outline-none" type="text" {...register("description")} required />
                    </div>
                    <div className="grid grid-cols-4 mb-3">
                        <label>Team:</label>
                        <input className=" col-span-3 py-1 px-2 rounded-md bg-gray-50 border border-gray-400 outline-none" type="text" {...register("team")} required />
                    </div>
                    <div className="grid grid-cols-4 mb-3">
                        <label>Assignee:</label>
                        <input className=" col-span-3 py-1 px-2 rounded-md bg-gray-50 border border-gray-400 outline-none" type="text" {...register("assignee")} required />
                    </div>
                    <div className="grid grid-cols-4">
                        <label>Priority:</label>
                        <select className="select select-sm focus:outline-none rounded-md border border-gray-400" {...register("priority")} required>
                                <option defaultValue="P0">P0</option>
                                <option value="P1">P1</option>
                                <option value="P2">P2</option>
                            </select>
                    </div>
                </div>
                <div className="flex justify-end gap-5 py-3 px-5">
                    <input className="bg-sky-700 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md" type="submit" />
                    <button type="button" onClick={handleReset} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md">Reset</button>
                </div>
            </form>
        </div>
    )
}

export default CreateTaskForm