import { Task } from './task.entity';

export const TASK_REPOSITORY = 'TASK_REPOSITORY';

export interface ITaskRepository {
  create: (task: Task) => Promise<void>;
  findOne: (id: string) => Promise<Task | null>;
  getAll: () => Promise<Task[]>;
  update: (task: Task) => Promise<void>;
  remove: (id: string) => Promise<void>;
}
