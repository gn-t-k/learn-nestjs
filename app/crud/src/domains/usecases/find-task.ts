import { ITaskRepository } from '../task/task.repository.interface';

interface IProps {
  id: string;
}

export const findTask =
  (repository: ITaskRepository) =>
  async ({ id }: IProps) => {
    const task = await repository.findOne(id);

    if (task === null) {
      throw new Error('task not found');
    }

    return task;
  };
