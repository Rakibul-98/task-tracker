/* eslint-disable react/prop-types */

import EditTaskForm from "../../Forms/EditTaskForm";

export default function EditModal({ editModalId }) {
    return (
        <div>
            <dialog id={editModalId} className="modal">
                <div className="modal-box rounded-none p-0 w-5/12">
                    <div className="flex justify-between items-center py-2 px-4">
                        <h3 className="uppercase font-bold">edit task</h3>
                        <form method="dialog">
                            <button className="btn btn-xs btn-circle border-gray-500">✕</button>
                        </form>
                    </div>
                    <EditTaskForm />
                </div>
            </dialog>
        </div>
    )
}
