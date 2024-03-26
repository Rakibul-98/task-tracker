/* eslint-disable react/prop-types */

import DatePicker from "./DatePicker";

export default function FilterTask({ tasks }) {

    const handleFilterByName = (name) => {
        alert(name);
    }
    const handleFilterByPriority = (p) => {
        alert(p);
    }

    return (
        <div className=" flex items-center gap-5">
            <p>Filter By:</p>
            <select className="select select-sm focus:outline-none rounded-md text-gray-500" onChange={(e) => handleFilterByName(e.target.value)}>
                <option>Assignee Name</option>
                {
                    tasks.map((task) => (
                        <option key={task.id} value={task.assignee}>{task.assignee}</option>
                    ))
                }
            </select>
            <select className="select select-sm focus:outline-none rounded-md text-gray-500" onChange={(e) => handleFilterByPriority(e.target.value)}>
                <option>Priority</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
            </select>
            <div className="w-[28%]">
                <DatePicker />
            </div>
        </div>
    )
}
