/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function OptionModal({ task, optionModalId, handleConfirmDelete }) {

    const {id, status} = task;

    const deleteModalId = `delete-modal-${id}`;
    const editModalId = `edit-modal-${id}`;

    const handleEdit = () => {
        document.getElementById(optionModalId).close();
        document.getElementById(editModalId).showModal();
    }

    const handleDelete = () => {
        document.getElementById(optionModalId).close();
        if (status === "Completed") {
            toast.error("Sorry!! Completed task can not be deleted.")
        }
        else {
            document.getElementById(deleteModalId).showModal();
        }
    }

    return (
        <dialog id={optionModalId} className="modal">
            <div className="modal-box w-32 p-2 rounded-md bg-stone-300">
                <p className="hover:text-blue-500 cursor-pointer" onClick={handleEdit}>Edit</p>
                <EditModal editModalId={editModalId} task={task}/>
                <hr className="my-1" />
                <p className="hover:text-red-500 cursor-pointer" onClick={handleDelete}>Delete</p>
                <DeleteModal deleteModalId={deleteModalId} handleConfirmDelete={handleConfirmDelete} task={task} />
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
