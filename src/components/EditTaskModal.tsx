import React from "react";
import { Task } from "../models/Task";

interface Props {
  task: Task;
  onSave: (updatedTask: Task) => void;
  onClose: () => void;
}

export const EditTaskModal: React.FC<Props> = ({ task, onSave, onClose }) => {
  const [updatedTask, setUpdatedTask] = React.useState<Task>({ ...task });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setUpdatedTask(prev => ({
      ...prev,
      [name]: name === "completed" && type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow">
        <h2>Edit Task</h2>
        <input name="title" value={updatedTask.title} onChange={handleChange} className="mb-2 p-2" />
        <textarea name="description" value={updatedTask.description} onChange={handleChange} className="mb-2 p-2" />
        <select name="priority" value={updatedTask.priority} onChange={handleChange} className="mb-2 p-2">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <label>
          Completed:
          <input type="checkbox" name="completed" checked={updatedTask.completed} onChange={handleChange} />
        </label>
        <div className="mt-4 flex gap-2">
          <button onClick={() => onSave(updatedTask)} className="bg-green-500 text-white px-4 py-1 rounded">Save</button>
          <button onClick={onClose} className="bg-gray-300 px-4 py-1 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};
