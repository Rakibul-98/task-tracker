import TaskContainer from "./components/TaskContainer"
import { FaUserAlt } from "react-icons/fa";

function Home() {
    return (
        <div className="bg-fuchsia-200 p-10 min-h-screen">
            <div className="flex items-center justify-between pt-0 p-5">
                <h3 className="font-bold text-xl">Task Board</h3>
                <div className=" bg-white rounded-full p-2">
                    <FaUserAlt />
                </div>
            </div>
            <TaskContainer />
        </div>
    )
}

export default Home