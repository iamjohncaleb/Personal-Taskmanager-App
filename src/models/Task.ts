export enum TaskStatus {
  Pending = "Pending",
  Completed = "Completed",
  Archived = "Archived",
}

export enum TaskPriority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  priority: TaskPriority;
  dueDate?: Date;
  status?: TaskStatus;
}
