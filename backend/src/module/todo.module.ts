import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from '../service/todo.service';
import { TodoController } from '../controller/todo.controller';
import { TodoEntity } from '../entity/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}
