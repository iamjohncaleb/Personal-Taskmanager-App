import React, { useState } from "react";
import { Task, TaskPriority, TaskStatus } from "../models/Task";

interface CreateTaskModalProps {
  onCreate: (task: Task) => void;
  onClose: () => void;
}

export const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ onCreate, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TaskPriority>(TaskPriority.Medium);
  const [dueDate, setDueDate] = useState<string>("");

  const handleSubmit = () => {
    if (!title) return;
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      priority,
      status: TaskStatus.Pending,
      dueDate: new Date(dueDate),
      completed: false,
    };
    onCreate(newTask);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-gray-900 border border-gray-700 p-6 rounded-2xl w-96 animate-fadeIn space-y-4">
        <h2 className="text-2xl font-bold text-white">Create New Task</h2>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <input
          type="date"
          className="w-full p-2 bg-gray-800 border border-gray-700 rounded text-white"
          value={dueDate}
          onChange={e => setDueDate(e.target.value)}
        />
        <div className="flex justify-between gap-2">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
