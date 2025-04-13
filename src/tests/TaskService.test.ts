import { Task, TaskStatus, TaskPriority } from "../models/Task";
import { TaskService } from "../services/TaskService";

describe("TaskService", () => {
  let taskService: TaskService;

  beforeEach(() => {
    taskService = new TaskService();
  });

  test("should add a task", () => {
    const task: Task = {
      id: 1,
      title: "Test Task",
      description: "A task to test adding",
      status: TaskStatus.Pending,
      priority: TaskPriority.Medium,
      dueDate: new Date(),
      completed: false, // important: ensure this property is included if your Task model requires it
    };
    taskService.addTask(task);
    const tasks = taskService.getTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0]).toEqual(task);
  });

  test("should delete a task", () => {
    const task: Task = {
      id: 1,
      title: "Test Task",
      description: "A task to test deletion",
      status: TaskStatus.Pending,
      priority: TaskPriority.Medium,
      dueDate: new Date(),
      completed: false,
    };
    taskService.addTask(task);
    taskService.deleteTask(1);
    const tasks = taskService.getTasks();
    expect(tasks.length).toBe(0);
  });

  test("should toggle task status", () => {
    const task: Task = {
      id: 1,
      title: "Test Task",
      description: "A task to test status toggle",
      status: TaskStatus.Pending,
      priority: TaskPriority.Medium,
      dueDate: new Date(),
      completed: false,
    };
    taskService.addTask(task);
    taskService.toggleTaskStatus(1);
    expect(taskService.getTasks()[0].status).toBe(TaskStatus.Completed);

    taskService.toggleTaskStatus(1);
    expect(taskService.getTasks()[0].status).toBe(TaskStatus.Pending);
  });

  test("should archive a task", () => {
    const task: Task = {
      id: 1,
      title: "Test Task",
      description: "A task to test archiving",
      status: TaskStatus.Completed,
      priority: TaskPriority.Medium,
      dueDate: new Date(),
      completed: false,
    };
    taskService.addTask(task);
    taskService.archiveTask(1);
    expect(taskService.getTasks()[0].status).toBe(TaskStatus.Archived);
  });

  test("should restore an archived task", () => {
    const task: Task = {
      id: 1,
      title: "Test Task",
      description: "A task to test restore",
      status: TaskStatus.Archived,
      priority: TaskPriority.Medium,
      dueDate: new Date(),
      completed: false,
    };
    taskService.addTask(task);
    taskService.restoreTask(1);
    expect(taskService.getTasks()[0].status).toBe(TaskStatus.Pending);
  });

  test("should sort tasks by priority", () => {
    const task1: Task = {
      id: 1,
      title: "Task 1",
      description: "High priority task",
      status: TaskStatus.Pending,
      priority: TaskPriority.High,
      dueDate: new Date(),
      completed: false,
    };

    const task2: Task = {
      id: 2,
      title: "Task 2",
      description: "Low priority task",
      status: TaskStatus.Pending,
      priority: TaskPriority.Low,
      dueDate: new Date(),
      completed: false,
    };

    const task3: Task = {
      id: 3,
      title: "Task 3",
      description: "Medium priority task",
      status: TaskStatus.Pending,
      priority: TaskPriority.Medium,
      dueDate: new Date(),
      completed: false,
    };

    taskService.addTask(task1);
    taskService.addTask(task2);
    taskService.addTask(task3);

    const sortedTasks = taskService.sortTasksByPriority();
    expect(sortedTasks[0].priority).toBe(TaskPriority.High);
    expect(sortedTasks[1].priority).toBe(TaskPriority.Medium);
    expect(sortedTasks[2].priority).toBe(TaskPriority.Low);
  });
});
