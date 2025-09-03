































































































import { Task, TaskStatus, TaskPriority } from "../models/Task";

export class TaskService {
  private tasks: Task[] = [];

  addTask(task: Task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  updateTask(updatedTask: Task) {
    this.tasks = this.tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    );
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleTaskStatus(id: number) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, status: task.status === TaskStatus.Pending ? TaskStatus.Completed : TaskStatus.Pending } : task
    );
  }

  archiveTask(id: number) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, status: TaskStatus.Archived } : task
    );
  }

  restoreTask(id: number) {
    this.tasks = this.tasks.map(task =>
      task.id === id ? { ...task, status: TaskStatus.Pending } : task
    );
  }

  sortTasksByPriority() {
    const priorityOrder = {
      [TaskPriority.High]: 1,
      [TaskPriority.Medium]: 2,
      [TaskPriority.Low]: 3,
    };

    return [...this.tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
  }
}
