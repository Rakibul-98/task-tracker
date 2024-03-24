
function TaskForm() {
    return (
        <div className="">
            <form className="form-control bg-fuchsia-200 p-5" action="">
                <div className="grid grid-cols-4 mb-3">
                    <label htmlFor="title">Title:</label>
                    <input className=" col-span-3 py-1 px-2 rounded-md bg-gray-50 border border-gray-400 outline-none" type="text" name="title" id="" />
                </div>
                <div className="grid grid-cols-4 mb-3">
                    <label htmlFor="description">Description:</label>
                    <input className=" col-span-3 py-1 px-2 rounded-md bg-gray-50 border border-gray-400 outline-none" type="text" name="description" id="" />
                </div>
                <div className="grid grid-cols-4 mb-3">
                    <label htmlFor="team">Team:</label>
                    <input className=" col-span-3 py-1 px-2 rounded-md bg-gray-50 border border-gray-400 outline-none" type="text" name="team" id="" />
                </div>
                <div className="grid grid-cols-4 mb-3">
                    <label htmlFor="assignee">Assignee:</label>
                    <input className=" col-span-3 py-1 px-2 rounded-md bg-gray-50 border border-gray-400 outline-none" type="text" name="assignee" id="" />
                </div>
                <div className="grid grid-cols-4">
                    <label htmlFor="priority">Priority:</label>
                    <select id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </form>
            <div className="flex justify-end gap-5 p-5">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md">Submit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md">Reset</button>
            </div>
        </div>
    )
}

export default TaskForm