import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

export const TASK_REPOSITORY = 'TASK_REPOSITORY';

export interface ITaskRepository {
  create: (createTaskDto: CreateTaskDto) => Promise<void>;
  findOne: (id: string) => Promise<Task>;
  findAll: () => Promise<Task[]>;
  update: (updateTaskDto: UpdateTaskDto) => Promise<void>;
  remove: (id: string) => Promise<void>;
}
