import TaskContainer from "./components/TaskContainer/TaskContainer"
import { FaUserAlt } from "react-icons/fa";

function Home() {

    return (
        <div className=" bg-gradient-to-br from-fuchsia-200 to-violet-200 pt-5 p-3 md:p-10 min-h-screen">
            <div className="flex items-center justify-between pt-0 p-3 md:p-5">
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