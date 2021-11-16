import { Task } from './task.entity';

export const TASK_REPOSITORY = 'TASK_REPOSITORY';

export interface ITaskRepository {
  create: (task: Task) => Promise<void>;
  findTask: (id: string) => Promise<Task>;
  getAllTask: () => Promise<Task[]>;
  update: (task: Task) => Promise<void>;
  remove: (id: string) => Promise<void>;
}
