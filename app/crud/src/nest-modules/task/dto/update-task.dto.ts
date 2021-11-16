import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  content?: string;
}
