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

    const formInputs = [
        { id: 1, name: "title", value: task.title },
        { id: 2, name: "description", value: task.description },
        { id: 3, name: "team", value: task.team },
        { id: 4, name: "assignee", value: task.assignee },
    ]

    const formOptions = [
        { id: 1, name: "priority", value: task.priority, options:[
            { id: 1, name: "P0" },
            { id: 2, name: "P1" },
            { id: 3, name: "P2" }
        ] },
        { id: 2, name: "status", value: task.status, options:[
            { id: 1, name: "In Progress" },
            { id: 2, name: "Completed" },
            { id: 3, name: "Deployed" },
            { id: 4, name: "Deferred" },
            { id: 5, name: "Pending" }
        ] },
    ]

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="bg-gradient-to-br from-fuchsia-200 to-violet-200 p-5 form-control">
                    {
                        formInputs.map((field) => {
                            return (
                                <div key={field.id}>
                                    <label className="capitalize">{field.name}: </label>
                                    <br />
                                    <input className="py-1 mt-1 md:w-full mb-3 px-2 rounded-md bg-stone-300 border border-gray-400 outline-none text-gray-500" type="text" value={field.value} disabled />
                                </div>
                            )
                        })
                    }
                    <div className="md:flex justify-between">
                        {
                            formOptions.map((field) => {
                                return (
                                    <div key={field.id}
                                        className="grid grid-cols-4 mt-2 md:inline">
                                        <label className="capitalize">{field.name}: </label>
                                        <select className="w-fit select select-sm focus:outline-none rounded-md border border-gray-400" defaultValue={field.value} {...register(field.name)} required>
                                            {
                                                field.options.map(optn=><option key={optn.id} value={optn.name}>{optn.name}</option>)
                                            }
                                        </select>
                                    </div>
                                )
                            })
                        }
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
