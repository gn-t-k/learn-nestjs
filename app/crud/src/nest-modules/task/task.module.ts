import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaService } from 'src/prisma.service';
import { TaskRepository } from 'src/infrastructure/prisma/repository/task.repository';
import { TASK_REPOSITORY } from 'src/domains/task/task.repository.interface';

@Module({
  controllers: [TaskController],
  providers: [
    TaskService,
    {
      useClass: TaskRepository,
      provide: TASK_REPOSITORY,
    },
    PrismaService,
  ],
})
export class TaskModule {}
