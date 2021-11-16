import { ITaskRepository } from '../task/task.repository.interface';

interface IProps {
  id: string;
}

export const removeTask =
  (repository: ITaskRepository) =>
  async ({ id }: IProps) => {
    const storedTask = await repository.findOne(id);

    if (storedTask === null) {
      throw new Error('task not found');
    }

    await repository.remove(id);
  };
