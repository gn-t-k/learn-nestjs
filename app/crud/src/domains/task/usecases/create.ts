import { Task } from '../task.entity';
import { ITaskRepository } from '../task.repository.interface';

interface IProps {
  title: string;
  content: string;
}

export const create =
  (repository: ITaskRepository) =>
  async ({ title, content }: IProps) => {
    const task = Task.create({ title, content });

    await repository.create(task);
  };
