import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MaxLength, IsEnum, IsOptional } from 'class-validator';

export enum Category {
  one,
  two,
  three,
}

export class Todo {
  @ApiPropertyOptional({
    description: 'Id',
    example: 1,
    readOnly: true,
  })
  id?: string;

  @ApiProperty({
    description: 'Title',
    example: 'shopping',
    maxLength: 10,
  })
  @MaxLength(10)
  title: string;

  @ApiProperty({
    description: 'Category',
    enum: Category,
  })
  @IsEnum(Category)
  category: Category;

  @ApiPropertyOptional({
    description: 'Content',
    example: 'Buy milk.',
    maxLength: 256,
  })
  @IsOptional()
  @MaxLength(256)
  content?: string;
}
