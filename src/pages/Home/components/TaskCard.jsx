/* eslint-disable react/prop-types */

import { BsThreeDotsVertical } from "react-icons/bs";
import EditTaskForm from "./EditTaskForm";

function TaskCard({ task }) {

  const { title, priority, description, assignee, status } = task;

  const handleEdit = () => {
    document.getElementById('my_modal_2').close();
    document.getElementById('edit-modal').showModal();
  }

  const handleDelete = () => {
    document.getElementById("my_modal_2").close();
    document.getElementById("confirm-delete").showModal();
  }

  return (
    <div className=" bg-red-50 p-4 mx-2 my-3 rounded-lg relative">
      <div className="flex justify-between mb-3">
        <h3 className="font-bold">{title}</h3>
        <p className="bg-blue-500 text-white w-fit px-1 text-sm">P{priority}</p>
      </div>
      <hr className="h-[2px] bg-black" />
      <p className="my-3">{description}</p>
      <div className="flex justify-between mb-3">
        <p className="font-bold">@{assignee}</p>
        <button className="bg-blue-500 text-white px-1" onClick={() => document.getElementById('my_modal_2').showModal()}><BsThreeDotsVertical /></button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box w-32 p-2 rounded-md">
            <p className="hover:font-bold cursor-pointer" onClick={handleEdit}>Edit</p>
            <dialog id="edit-modal" className="modal">
              <div className="modal-box rounded-none p-0 w-5/12">
                <div className="flex justify-between items-center py-2 px-4">
                  <h3 className="uppercase font-bold">edit task</h3>
                  <form method="dialog">
                    <button className="btn btn-xs btn-circle border-gray-500">✕</button>
                  </form>
                </div>
                <EditTaskForm task={task} />
              </div>
            </dialog>
            <hr />
            <p className="hover:font-bold cursor-pointer" onClick={handleDelete}>Delete</p>
            <dialog id="confirm-delete" className="modal">
              <div className="modal-box p-0 rounded-none w-4/12">
                <div className="flex justify-between items-center py-2 px-5">
                  <h3 className="uppercase font-semibold">delete task</h3>
                  <form method="dialog">
                    <button className="btn btn-xs btn-circle border-gray-500">✕</button>
                  </form>
                </div>
                <div className="bg-fuchsia-200 px-5 pb-5">
                  <p className="py-4">Do You Want to Delete Task?</p>
                  <div className="flex justify-between">
                    <p className="font-semibold">Task 1</p>
                    <div className="flex gap-4">
                      <button className="bg-blue-500  text-white px-5 rounded-sm">YES</button>
                      <button onClick={() => document.getElementById('confirm-delete').close()} className="bg-blue-500 hover:bg-blue-700 text-white px-5 rounded-sm">NO</button>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      <p className="bg-blue-500 text-white px-3 rounded-[4px] w-fit font-semibold">{status}</p>
    </div>
  )
}

export default TaskCard