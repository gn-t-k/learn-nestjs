import { ITaskRepository } from '../task/task.repository.interface';

export const getAllTask = (repository: ITaskRepository) => async () =>
  await repository.getAll();
