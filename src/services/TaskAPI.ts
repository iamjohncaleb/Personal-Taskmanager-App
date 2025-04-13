import { TaskPriority, Task } from "../models/Task";

export const TaskAPI = {
  fetchTasks(): Promise<Task[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            title: "Buy groceries",
            description: "Milk, Eggs, Bread",
            completed: false,
            priority: TaskPriority.Medium,
          },
          {
            id: 2,
            title: "Clean room",
            description: "Dust shelves",
            completed: true,
            priority: TaskPriority.Low,
          },
        ]);
      }, 1000);
    });
  },
};
