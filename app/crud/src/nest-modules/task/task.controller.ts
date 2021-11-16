import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    try {
      return await this.taskService.create(createTaskDto);
    } catch (error) {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: 'something wrong' },
        500,
      );
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.taskService.getAll();
    } catch {
      throw new HttpException(
        { status: HttpStatus.INTERNAL_SERVER_ERROR, error: 'something wrong' },
        500,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.taskService.findOne(id);
    } catch (error) {
      if (error instanceof Error && error.message === 'task not found') {
        throw new HttpException(
          { status: HttpStatus.NOT_FOUND, error: `task not found(id: ${id})` },
          404,
        );
      } else {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'something wrong',
          },
          500,
        );
      }
    }
  }

  @Patch(':id')
  async update(@Body() updateTaskDto: UpdateTaskDto) {
    try {
      return await this.taskService.update(updateTaskDto);
    } catch (error) {
      if (error instanceof Error && error.message === 'task not found') {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: `task not found(id: ${updateTaskDto.id})`,
          },
          404,
        );
      } else {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'something wrong',
          },
          500,
        );
      }
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.taskService.remove(id);
    } catch (error) {
      if (error instanceof Error && error.message === 'task not found') {
        throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            error: `task not found(id: ${id})`,
          },
          404,
        );
      } else {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: 'something wrong',
          },
          500,
        );
      }
    }
  }
}
