/* eslint-disable react/prop-types */

import toast from "react-hot-toast";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function OptionModal({ isActive, task, handleConfirmDelete, setActiveModal }) {

    const { id, status } = task;

    const deleteModalId = `delete-modal-${id}`;
    const editModalId = `edit-modal-${id}`;


    const handleEdit = () => {
        document.getElementById(editModalId).showModal();
        setActiveModal(null);
    }

    const handleDelete = () => {
        setActiveModal(null);
        if (status === "Completed") {
            toast.error("Sorry!! Completed task can not be deleted.")
        }
        else {
            document.getElementById(deleteModalId).showModal();
        }
    }

    return (
        <div className="absolute right-0">
        <EditModal editModalId={editModalId} task={task} />
        <DeleteModal deleteModalId={deleteModalId} handleConfirmDelete={handleConfirmDelete} task={task} />
            <div className={`${isActive ? '' : 'hidden'} `}>
                <ul className="absolute right-0 top-7 bg-sky-500 p-2 w-24 rounded-md rounded-tr-none text-white">
                    <li className="cursor-pointer hover:font-bold" onClick={handleEdit}>Edit</li>
                    <hr className="w-full" />
                    <li className="cursor-pointer hover:font-bold" onClick={handleDelete}>Delete</li>
                </ul>
            </div>
        </div>
    )
}
