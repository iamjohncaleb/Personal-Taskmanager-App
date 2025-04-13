import React, { useEffect, useState } from "react";
import { Task } from "./models/Task";
import { TaskService } from "./services/TaskService";
import { TaskAPI } from "./services/TaskAPI";
import { TaskCard } from "./components/TaskCard";
import { TaskSummary } from "./components/TaskSummary";
import { EditTaskModal } from "./components/EditTaskModal";
import { Notification } from "./components/Notification";
import { CreateTaskModal } from "./components/CreateTaskModal";
import { Menu, Plus } from "lucide-react";

const taskService = new TaskService();

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);

  useEffect(() => {
    TaskAPI.fetchTasks().then((fetchedTasks: Task[]) => {
      fetchedTasks.forEach(task => taskService.addTask(task));
      setTasks(taskService.getTasks());
      setLoading(false);
    });
  }, []);

  const handleSaveTask = (updatedTask: Task) => {
    taskService.updateTask(updatedTask);
    setTasks([...taskService.getTasks()]);
    setEditingTask(null);
  };

  const handleCreateTask = (newTask: Task) => {
    taskService.addTask(newTask);
    setTasks([...taskService.getTasks()]);
    setCreateModalOpen(false);
  };

  const handleDeleteTask = (id: number) => {
    taskService.deleteTask(id);
    setTasks([...taskService.getTasks()]);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const menu = document.getElementById("task-menu");
      const button = document.getElementById("menu-button");
      if (menu && !menu.contains(e.target as Node) && button && !button.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="p-6 flex flex-col items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white relative">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-4xl font-extrabold tracking-wider">⚙️ Task Manager</h1>
        <button
          id="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
        >
          <Menu size={24} />
        </button>
      </div>

      {loading && <Notification message="Loading tasks..." />}

      <TaskSummary tasks={tasks} />

      {menuOpen && (
        <>
          {/* Backdrop blur */}
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"></div>

          <div
            id="task-menu"
            className="absolute top-20 right-8 w-80 bg-gray-900 border border-gray-700 rounded-2xl p-4 shadow-xl animate-fadeIn z-50 transition-transform duration-300 scale-100"
          >
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-bold">📋 Your Tasks</h2>
              <button
                onClick={() => setCreateModalOpen(true)}
                className="p-1.5 rounded-full bg-gray-800 hover:bg-gray-700 transition"
              >
                <Plus size={20} />
              </button>
            </div>

            <div className="space-y-3 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
              {tasks.map(task => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={() => setEditingTask(task)}
                  onDelete={() => handleDeleteTask(task.id)}
                />
              ))}
              {tasks.length === 0 && (
                <p className="text-gray-400 text-center">No tasks available</p>
              )}
            </div>
          </div>
        </>
      )}

      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onSave={handleSaveTask}
          onClose={() => setEditingTask(null)}
        />
      )}

      {createModalOpen && (
        <CreateTaskModal
          onCreate={handleCreateTask}
          onClose={() => setCreateModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
