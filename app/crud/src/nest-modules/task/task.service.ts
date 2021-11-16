import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import {
  ITaskRepository,
  TASK_REPOSITORY,
} from '../../domains/task/task.repository.interface';
import { createTask } from 'src/domains/task/usecases/create-task';
import { Task } from 'src/domains/task/task.entity';
import { getAllTask } from 'src/domains/task/usecases/get-all-task';
import { findTask } from 'src/domains/task/usecases/find-task';
import { updateTask } from 'src/domains/task/usecases/update-task';

@Injectable()
export class TaskService {
  public constructor(
    @Inject(TASK_REPOSITORY)
    private readonly taskRepository: ITaskRepository,
  ) {}

  create = async (createTaskDto: CreateTaskDto) => {
    const { title, content } = createTaskDto;
    const task = Task.create({ title, content });

    await createTask(task, this.taskRepository);
  };

  getAllTask = async () => await getAllTask(this.taskRepository);

  findTask = async (id: string) => await findTask(id, this.taskRepository);

  update = async (updateTaskDto: UpdateTaskDto) => {
    const { id, title, content } = updateTaskDto;
    const task = Task.rebuild({ id, title, content });

    updateTask(task, this.taskRepository);
  };

  remove = async (id: string) => {
    await this.taskRepository.remove(id);
  };
}
