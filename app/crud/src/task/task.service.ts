import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ITaskRepository, TASK_REPOSITORY } from './task.repository.interface';

@Injectable()
export class TaskService {
  public constructor(
    @Inject(TASK_REPOSITORY)
    private readonly taskRepository: ITaskRepository,
  ) {}

  create = async (createTaskDto: CreateTaskDto) => {
    await this.taskRepository.create(createTaskDto);
  };

  findAll = async () => await this.taskRepository.findAll();

  findOne = async (id: string) => await this.taskRepository.findOne(id);

  update = async (updateTaskDto: UpdateTaskDto) =>
    await this.taskRepository.update(updateTaskDto);

  remove = async (id: string) => {
    await this.taskRepository.remove(id);
  };
}
