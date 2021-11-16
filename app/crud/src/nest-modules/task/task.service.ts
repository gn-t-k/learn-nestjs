import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {
  ITaskRepository,
  TASK_REPOSITORY,
} from 'src/domains/task/task.repository.interface';
import * as Usecase from 'src/domains/task/usecases';

@Injectable()
export class TaskService {
  public constructor(
    @Inject(TASK_REPOSITORY)
    private readonly taskRepository: ITaskRepository,
  ) {}

  public create = async (createTaskDto: CreateTaskDto) => {
    const { title, content } = createTaskDto;

    await Usecase.create(this.taskRepository)({ title, content });
  };

  public findOne = async (id: string) =>
    await Usecase.findOne(this.taskRepository)({ id });

  public getAll = async () => await Usecase.getAll(this.taskRepository)();

  public update = async (updateTaskDto: UpdateTaskDto) => {
    const { id, title, content } = updateTaskDto;

    await Usecase.update(this.taskRepository)({ id, title, content });
  };

  public remove = async (id: string) => {
    await Usecase.remove(this.taskRepository)({ id });
  };
}
