import { Field, ObjectType } from '@nestjs/graphql';
import { MaxLength, IsEnum, IsOptional } from 'class-validator';
import { Category } from 'src/resource/todo';

@ObjectType()
export class Todo {
  @Field()
  id?: string;

  @MaxLength(10)
  @Field()
  title: string;

  @IsEnum(Category)
  @Field(type => String)
  category: Category;

  @IsOptional()
  @MaxLength(256)
  @Field({ nullable: true })
  content?: string;
}
