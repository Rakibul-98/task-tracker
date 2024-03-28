/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function FilterTask({ setFilterValue}) {
    const [assigneeName, setAssigneeName] = useState('');
    const [priority, setPriority] = useState('Priority');
    const [dateRange, setDateRange] = useState('');

    useEffect(() => {
        setFilterValue({ assigneeName, priority, dateRange });
    }, [setFilterValue, assigneeName, priority, dateRange]);

    return (
        <div className="md:flex items-center md:gap-2">
            <p className="w-16">Filter By:</p>
            <input
                onBlur={(e) => setAssigneeName(e.target.value)}
                className="p-1 bg-gray-50 rounded-md w-full md:w-[25%] my-3 md:my-0 outline-none placeholder:text-gray-500 ps-3"
                type="text"
                placeholder="Assignee name"
            />
            <select className="select select-sm w-full md:w-[15%] bg-gray-50 focus:outline-none rounded-md text-gray-500" onChange={(e) => setPriority(e.target.value)}>
                <option>Priority</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
            </select>
            <div className="md:w-[200px] my-3 md:my-0">
                <Datepicker
                    value={dateRange}
                    onChange={(value) => setDateRange(value)}
                    useRange={false} 
                    separator={"-"}
                    placeholder={"DD/MM/YY - DD/MM/YY"}
                    inputClassName="w-full rounded-md focus:outline-none font-normal py-1 px-5 bg-gray-50 placeholder:text-gray-500 placeholder:text-xs"
                />
            </div>

        </div>
    )
}
