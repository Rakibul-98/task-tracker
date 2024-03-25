/* eslint-disable react/prop-types */

import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function OptionModal({ id, title, optionModalId, handleConfirmDelete }) {

    const deleteModalId = `delete-modal-${id}`;
    const editModalId = `edit-modal-${id}`;

    const handleEdit = () => {
        document.getElementById(optionModalId).close();
        document.getElementById(editModalId).showModal();
    }

    const handleDelete = () => {
        document.getElementById(optionModalId).close();
        document.getElementById(deleteModalId).showModal();
    }

    return (
        <dialog id={optionModalId} className="modal">
            <div className="modal-box w-32 p-2 rounded-md">
                <p className="hover:font-bold cursor-pointer" onClick={handleEdit}>Edit</p>
                <EditModal editModalId={editModalId} />
                <hr />
                <p className="hover:font-bold cursor-pointer" onClick={handleDelete}>Delete</p>
                <DeleteModal deleteModalId={deleteModalId} handleConfirmDelete={handleConfirmDelete} id={id} title={title} />
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
