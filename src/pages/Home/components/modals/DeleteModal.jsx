/* eslint-disable react/prop-types */

export default function DeleteModal({ deleteModalId, handleConfirmDelete, task }) {

    const {id, title} = task;

    return (
        <dialog id={deleteModalId} className="modal">
            <div className="modal-box p-0 rounded-none w-4/12">
                <div className="flex justify-between items-center py-2 px-5">
                    <h3 className="uppercase font-semibold">delete task</h3>
                    <form method="dialog">
                        <button className="btn btn-xs btn-circle border-gray-500">✕</button>
                    </form>
                </div>
                <div className="bg-gradient-to-br from-fuchsia-200 to-violet-200 px-5 pb-5">
                    <p className="py-4">Do You Want to Delete Task?</p>
                    <div className="flex justify-between">
                        <p className="font-semibold">{title}</p>
                        <div className="flex gap-4">
                            <button onClick={() => handleConfirmDelete(id)} className="bg-sky-700 hover:bg-red-600  text-white px-5 rounded-sm">YES</button>
                            <button onClick={() => document.getElementById(deleteModalId).close()} className="bg-sky-700 hover:bg-blue-700 text-white px-5 rounded-sm">NO</button>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    )
}
