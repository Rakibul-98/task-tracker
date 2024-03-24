import { BsThreeDotsVertical } from "react-icons/bs";

function TaskCard() {
  return (
    <div className=" bg-red-50 p-4 mx-2 my-3 rounded-lg">
        <div className="flex justify-between mb-3">
            <h3 className="font-bold">Task 1</h3>
            <p className="bg-blue-500 text-white w-fit px-1 text-sm">P0</p>
        </div>
        <hr className="h-[2px] bg-black"/>
        <p className="my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis error soluta officiis nemo. Nam maiores saepe ducimus libero exercitationem maxime.</p>
        <div className="flex justify-between mb-3">
            <p className="font-bold">@author</p>
            <button className="bg-blue-500 text-white px-1"><BsThreeDotsVertical/></button>
        </div>
        <p className="bg-blue-500 w-fit text-white px-7 rounded-[4px] font-semibold">Status</p>
    </div>
  )
}

export default TaskCard