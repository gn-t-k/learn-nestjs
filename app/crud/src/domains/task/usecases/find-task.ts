import { ITaskRepository } from '../task.repository.interface';

export const findTask = async (id: string, repository: ITaskRepository) => {
  const task = repository.findTask(id);

  return task;
};
