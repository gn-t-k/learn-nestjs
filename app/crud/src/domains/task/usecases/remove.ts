import { ITaskRepository } from '../task.repository.interface';

interface IProps {
  id: string;
}

export const remove =
  (repository: ITaskRepository) =>
  async ({ id }: IProps) => {
    const storedTask = await repository.findOne(id);

    if (storedTask === null) {
      throw new Error('task not found');
    }

    await repository.remove(id);
  };
