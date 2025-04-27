export interface Task {
    title:string;
    droppableId:string;
    id:string;
    type: TaskType;
    priority:TaskPriority;
}

export enum TaskType {
    Task        = 'Task',
    Story       = 'Story',
    Bug         = 'Bug'
}

export enum TaskPriority {
    Highest     = 'Hightest',
    High        = 'Hight',
    Medium      = 'Medium',
    Low         = 'Low',
    Lowest      = 'Lowest'
}

export const TaskPriorityIcons: Record<TaskPriority, string> = {
  [TaskPriority.Highest]: "/images/board/highest-priority-icon.svg",
  [TaskPriority.High]: "/images/board/high-priority-icon.svg",
  [TaskPriority.Medium]: "/images/board/medium-priority-icon.svg",
  [TaskPriority.Low]: "/images/board/low-priority-icon.svg",
  [TaskPriority.Lowest]: "/images/board/lowest-priority-icon.svg",
};

export const TaskTypeIcons: Record<TaskType, string> = {
  [TaskType.Task]: "/images/task-icon.svg",
  [TaskType.Story]: "/images/story-icon.svg",
  [TaskType.Bug]: "/images/bug-icon.svg",
};