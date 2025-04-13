export enum TaskStatus {
    Pending = "Pending",
    Completed = "Completed",
    Archived = "Archived",
  }
  
  export enum TaskPriority {
    High = "High",
    Medium = "Medium",
    Low = "Low",
  }
  
  export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate: Date | null;
  }
  