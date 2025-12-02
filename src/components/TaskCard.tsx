





















import React from "react";
import { Task } from "../models/Task";
import { Pencil, Trash } from "lucide-react";

interface TaskCardProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit, onDelete }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-xl border border-gray-700 flex flex-col shadow hover:scale-105 transition transform">
      <h3 className="text-lg font-semibold">{task.title}</h3>
      <p className="text-gray-400 text-sm">{task.description}</p>
      {task.dueDate && (
        <p className="text-xs text-gray-500 mt-1">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      )}
      <div className="flex justify-end gap-2 mt-3">
        <button
          onClick={onEdit}
          className="text-blue-400 hover:text-blue-600 transition"
        >
          <Pencil size={16} />
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 transition"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};
