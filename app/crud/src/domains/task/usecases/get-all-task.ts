import { ITaskRepository } from '../task.repository.interface';

export const getAllTask = async (repository: ITaskRepository) => {
  const taskList = await repository.getAllTask();

  return taskList;
};
