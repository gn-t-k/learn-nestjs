import { Task } from '../task.entity';
import { ITaskRepository } from '../task.repository.interface';

export const updateTask = async (task: Task, repository: ITaskRepository) => {
  await repository.update(task);
};
