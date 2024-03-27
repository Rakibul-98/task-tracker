/* eslint-disable react/prop-types */

export default function Sort({ tasks, setSortedTasks }) {
    console.log(tasks);

    const handleSort = (by) => {
        if (by === "priority") {
            const sortedByPriority = tasks.slice().sort((a, b) => parseInt(a.priority.substring(1)) - parseInt(b.priority.substring(1)));
            setSortedTasks(sortedByPriority);
        }
        else if (by === "start") {
            const sortedByStartDate = tasks.slice().sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
            console.log(sortedByStartDate);
            setSortedTasks(sortedByStartDate);
        }
        else if (by === "end") {
            const sortedByEndDate = tasks.slice().sort((a, b) => new Date(a?.endDate) - new Date(b?.endDate));
            console.log(sortedByEndDate);
            setSortedTasks(sortedByEndDate);
        }
    }

    return (
        <div className="flex gap-5 py-4">
            <p>Sort By:</p>
            <select className="select select-sm focus:outline-none ms-2 rounded-md text-gray-500" onChange={(e) => handleSort(e.target.value)}>
                <option>Select</option>
                <option value="priority">Priority</option>
                <optgroup label="Date">
                    <option value="start">Start Date</option>
                    <option value="end">End Date</option>
                </optgroup>
            </select>
        </div>
    )
}
