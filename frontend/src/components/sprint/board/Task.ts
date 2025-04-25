export interface Task {
    title:string;
    droppableId:string;
    id:string;
    type: TaskType;
}

export enum TaskType {
    Task        = 'Task',
    Story       = 'Story',
    Bug         = 'Bug'
}