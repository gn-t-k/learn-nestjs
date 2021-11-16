import { Injectable } from '@nestjs/common';
import { Task } from 'src/domains/task/task.entity';
import { ITaskRepository } from 'src/domains/task/task.repository.interface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TaskRepository implements ITaskRepository {
  public constructor(private readonly prismaService: PrismaService) {}

  public create = async (task: Task) => {
    const { id, title, content } = task;
    await this.prismaService.task.create({
      data: {
        id,
        title,
        content,
      },
    });
  };

  public findOne = async (id: string) => {
    const task = await this.prismaService.task.findUnique({
      where: {
        id,
      },
    });

    return task === null
      ? null
      : Task.rebuild({
          id: task.id,
          title: task.title,
          content: task.content ?? '',
        });
  };

  public getAll = async () => {
    const taskList = await this.prismaService.task.findMany();

    return taskList.map((task) =>
      Task.rebuild({
        id: task.id,
        title: task.title,
        content: task.content ?? '',
      }),
    );
  };

  public update = async (task: Task) => {
    await this.prismaService.task.update({
      where: {
        id: task.id,
      },
      data: {
        title: task.title,
        content: task.content,
      },
    });
  };

  public remove = async (id: string) => {
    await this.prismaService.task.delete({
      where: {
        id,
      },
    });
  };
}
