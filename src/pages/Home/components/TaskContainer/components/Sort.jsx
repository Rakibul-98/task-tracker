/* eslint-disable react/prop-types */

export default function Sort({tasks, setSortedTasks}) {

    const handleSort = (by) => {
        if (by === "date") {
            const sortedByDate = tasks.slice().sort((a, b) => a.createdDate - b.createdDate);
            setSortedTasks(sortedByDate);
        }
        else if (by === "priority") {
            const sortedByPriority = tasks.slice().sort((a, b) => parseInt(a.priority.substring(1)) - parseInt(b.priority.substring(1)));
            setSortedTasks(sortedByPriority);
        }
    }

    return (
        <div className="flex gap-5 py-4">
            <p>Sort By:</p>
            <select className="select select-sm focus:outline-none ms-2 rounded-md text-gray-500" onChange={(e) => handleSort(e.target.value)}>
                <option>Select</option>
                <option value="priority">Priority</option>
                <option value="date">Date</option>
            </select>
        </div>
    )
}
