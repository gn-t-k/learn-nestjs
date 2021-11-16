import { Task } from '../task/task.entity';
import { ITaskRepository } from '../task/task.repository.interface';

interface IProps {
  id: string;
  title?: string;
  content?: string;
}

export const updateTask =
  (repository: ITaskRepository) =>
  async ({ id, title, content }: IProps) => {
    const storedTask = await repository.findOne(id);

    if (storedTask === null) {
      throw new Error('task not found');
    }

    const task = Task.rebuild({
      id,
      title: title ?? storedTask.title,
      content: content ?? storedTask.content,
    });

    await repository.update(task);
  };
