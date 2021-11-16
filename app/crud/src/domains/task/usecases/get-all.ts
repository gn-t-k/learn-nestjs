import { ITaskRepository } from '../task.repository.interface';

export const getAll = (repository: ITaskRepository) => async () =>
  await repository.getAll();
