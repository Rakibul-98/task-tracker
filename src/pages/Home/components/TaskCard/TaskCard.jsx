/* eslint-disable react/prop-types */
import { BsThreeDotsVertical } from "react-icons/bs";
import OptionModal from "../modals/OptionModal";

function TaskCard({ task, handleConfirmDelete}) {
  const { id, title, priority, description, assignee, status } = task;
  const optionModalId = `option-modal-${id}`;

  return (
    <div className=" bg-stone-100 p-2 rounded-lg m-2 mb-0">
      <div className="flex justify-between mb-2">
        <h3 className="font-bold">{title}</h3>
        <p className="bg-sky-700 text-white w-fit px-1 text-sm">{priority}</p>
      </div>
      <hr className="h-[2px] bg-gray-400" />
      <p className="my-2 text-xs">{description}</p>
      <div className="flex justify-between mb-3">
        <p className="font-bold">@{assignee}</p>
        <button className="bg-sky-700 text-white px-1" onClick={()=>document.getElementById(optionModalId).showModal()}><BsThreeDotsVertical /></button>
        <OptionModal task={task} handleConfirmDelete={handleConfirmDelete} optionModalId={optionModalId}/>
      </div>
      <p className="bg-sky-700 text-white px-3 rounded-[4px] w-fit font-semibold">{status}</p>
    </div>
  )
}

export default TaskCard