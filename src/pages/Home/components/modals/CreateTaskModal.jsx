import CreateTaskForm from '../Forms/CreateTaskForm';

export default function CreateTaskModal() {
    return (
        <dialog id="add-task-modal" className="modal">
            <div className="modal-box rounded-none p-0 w-10/12 md:w-6/12 lg:w-5/12">
                <div className="flex justify-between items-center py-2 px-4">
                    <h3 className="uppercase font-bold">create task</h3>
                    <form method="dialog">
                        <button className="btn btn-xs btn-circle border-gray-500">✕</button>
                    </form>
                </div>
                <CreateTaskForm />
            </div>
        </dialog>
    )
}
