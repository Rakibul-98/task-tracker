/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

export default function EditTaskForm({ tasks, setTasks }) {
    const { register, handleSubmit, reset } = useForm({
        // defaultValues: {
        //     title: tasks.title,
        //     description: tasks.description,
        //     team: tasks.team,
        //     assignee: tasks.assignee,
        //     priority: tasks.priority
        // }
    })
    const onSubmit = (data) => {
        const newTask = {
            id: Math.floor(Math.random() * 1000000000),
            title: data.title,
            description: data.description,
            team: data.team,
            assignee: data.assignee,
            priority: data.priority,
            status: "Pending"
        }
        setTasks([...tasks, newTask])
        reset();
        toast.success('New task created successfully!');
    }
    const handleReset = () => {
        reset()
        toast.success('Form reset successful!');
    };
    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=" bg-fuchsia-200 p-5 form-control">
                    <label htmlFor="title">Title:</label>
                    <input className=" col-span-3 py-1 px-2 rounded-md bg-gray-50 border border-gray-400 outline-none" type="text" {...register("title")} required />
                    <label htmlFor="description">Description:</label>
                    <input className=" col-span-3 py-1 px-2 rounded-md bg-gray-50 border border-gray-400 outline-none" type="text" {...register("description")} required />
                    <label htmlFor="team">Team:</label>
                    <input className=" col-span-3 py-1 px-2 rounded-md bg-gray-50 border border-gray-400 outline-none" type="text" {...register("team")} required />
                    <label htmlFor="assignee">Assignee:</label>
                    <input className=" col-span-3 py-1 px-2 rounded-md bg-gray-50 border border-gray-400 outline-none" type="text" {...register("assignee")} required />
                    <div className="flex justify-between mt-5">
                        <div className="flex items-center">
                            <label htmlFor="priority">Priority: </label>
                            <select {...register("priority")} required>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="priority">Status: </label>
                            <input className="w-[100px] py-1 px-2 rounded-md bg-gray-50 border border-gray-400 outline-none" type="text"/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-5 p-5">
                    <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md" type="submit" />
                    <button type="button" onClick={handleReset} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md">Reset</button>
                </div>
            </form>
        </div>
    )
}
