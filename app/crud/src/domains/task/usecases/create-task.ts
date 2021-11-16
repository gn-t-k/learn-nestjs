import { Task } from '../task.entity';
import { ITaskRepository } from '../task.repository.interface';

export const createTask = async (task: Task, repository: ITaskRepository) => {
  await repository.create(task);
};
