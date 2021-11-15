import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsString()
  title?: string;

  @IsString()
  content?: string;
}
