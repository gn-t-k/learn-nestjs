import { ITaskRepository } from '../task.repository.interface';

export const removeTask = async (id: string, repository: ITaskRepository) => {
  await repository.remove(id);
};
