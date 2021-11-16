import { v4 as uuid } from 'uuid';

interface CreateTask {
  title: string;
  content: string;
}

interface RebuildTask {
  id: string;
  title: string;
  content: string;
}

export class Task {
  private constructor(
    private readonly id: string,
    public readonly title: string,
    public readonly content: string,
  ) {}

  public static create = ({ title, content }: CreateTask) =>
    new Task(uuid(), title, content);

  public static rebuild = ({ id, title, content }: RebuildTask) =>
    new Task(id, title, content);

  public isEqualTo = (task: Task) => task.id === this.id;
}
