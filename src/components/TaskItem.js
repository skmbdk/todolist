import { useContext } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { DeleteHandlerContext, EditHandlerContext } from "../App";

const TaskItem = ({ task, handleEditSubmitter, editedText, setEditedText }) => {
  const handleDelete = useContext(DeleteHandlerContext);
  const handleEdit = useContext(EditHandlerContext);

  return (
    <div className="task-item flex justify-between items-center bg-gray-800 p-4 rounded hover:bg-gradient-to-r hover:from-teal-800 hover: to-gray-700 duration-300 group">
      <div className="task-item-left flex gap-2">
        <span>
          <input className="accent-teal-500" type="checkbox" />
        </span>
        {task.isEditable && (
          <form onSubmit={(e) => handleEditSubmitter(e, task.id)}>
            <input
              className="bg-transparent outline-none border-b-2 border-gray-600 pb-1 focus:border-teal-500"
              type="text"
              required
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
          </form>
        )}

        {!task.isEditable && (
          <p className="group-hover:text-teal-500">{task.text}</p>
        )}
      </div>
      <div className="task-item-right flex gap-2 items-center">
        <button onClick={() => handleEdit(task.id)}>
          <FiEdit className="text-gray-500 hover:text-teal-500 cursor-pointer duration-300" />
        </button>
        <button onClick={() => handleDelete(task.id)}>
          <FiTrash className="text-gray-500 hover:text-red-500 cursor-pointer duration-300" />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
