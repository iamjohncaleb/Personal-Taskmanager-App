import React from "react";
import { Task } from "../models/Task";

interface Props {
  tasks: Task[];
}

export const TaskSummary: React.FC<Props> = ({ tasks }) => {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;

  return (
    <div className="p-4 border rounded mb-4">
      <p>Total: {total}</p>
      <p>Completed: {completed}</p>
    </div>
  );
};
