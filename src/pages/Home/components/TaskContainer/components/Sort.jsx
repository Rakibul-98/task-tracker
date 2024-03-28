/* eslint-disable react/prop-types */

export default function Sort({ tasks, setSortedTasks }) {

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
            const sortedByEndDate = tasks.slice().sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
            console.log(sortedByEndDate);
            setSortedTasks(sortedByEndDate);
        }
    }

    return (
        <div className="md:flex items-center gap-3 py-4 md:py-0">
            <p className="w-24">Sort By:</p>
            <select className="select select-sm focus:outline-none w-full mt-3 md:mt-0 bg-gray-50 rounded-md text-gray-500" onChange={(e) => handleSort(e.target.value)}>
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
