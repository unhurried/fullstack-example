import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoService } from '../service/todo.service';
import { TodoController } from '../controller/todo.controller';
import { TodoResolver } from '../graphql/todo.resolver';
import { TodoEntity } from '../entity/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  providers: [TodoService, TodoResolver],
  controllers: [TodoController],
})
export class TodoModule {}
