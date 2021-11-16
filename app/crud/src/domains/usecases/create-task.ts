import { Task } from '../task/task.entity';
import { ITaskRepository } from '../task/task.repository.interface';

interface IProps {
  title: string;
  content: string;
}

export const createTask =
  (repository: ITaskRepository) =>
  async ({ title, content }: IProps) => {
    const task = Task.create({ title, content });

    await repository.create(task);
  };
