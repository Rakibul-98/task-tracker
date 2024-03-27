/* eslint-disable react/prop-types */

import DatePicker from "./DatePicker";

export default function FilterTask({ handleFilterByName, handleFilterByPriority }) {

    return (
        <div className=" flex items-center gap-5">
            <p>Filter By:</p>
            <input
                onBlur={(e) => handleFilterByName(e.target.value)}
                className="p-1 rounded-md w-[125px] outline-none"
                type="text"
                placeholder="Assignee name"
            />
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
