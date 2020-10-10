import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoService } from '../service/todo.service';
import { JwtAuthGuardForGql } from '../auth/jwt-auth-guard-for-gql';
import { CurrentUser } from 'src/auth/current-user';
import { AuthenticatedUser } from 'src/auth/resource/authenticated-user';
import { Todo } from './todo.dto';
import { TodoInput } from './todo-input.dto';
import { DeleteResult } from './delete-result.dto';

@Resolver(of => Todo)
@UseGuards(JwtAuthGuardForGql)
export class TodoResolver {
  constructor(private readonly service: TodoService) { }

  @Query(returns => [Todo])
  async todos(@CurrentUser() user: AuthenticatedUser): Promise<Todo[]> {
    const userId = user.userId;
    const items = await this.service.findAll(userId);
    return items;
  }

  @Query(returns => Todo)
  async todo(@Args('id') id: string, @CurrentUser() user: AuthenticatedUser): Promise<Todo> {
    const userId = user.userId;
    const item = await this.service.findById(userId, id);
    return item;
  }

  @Mutation(returns => Todo)
  async createTodo(@Args({ name: "todo", type: () => TodoInput }) todo: Todo, @CurrentUser() user: AuthenticatedUser): Promise<Todo> {
    const userId = user.userId;
    return await this.service.create(userId, todo);
  }

  @Mutation(returns => Todo)
  async updateTodo(@Args('id') id: string, @Args({ name: "todo", type: () => TodoInput }) todo: Todo, @CurrentUser() user: AuthenticatedUser): Promise<Todo> {
    const userId = user.userId;
    todo.id = id;
    return await this.service.update(userId, todo);
  }

  @Mutation(returns => DeleteResult)
  async deleteTodo(@Args('id') id: string, @CurrentUser() user: AuthenticatedUser): Promise<DeleteResult> {
    const userId = user.userId;
    const result = new DeleteResult();
    result.deleted = await this.service.delete(userId, id)
    return result;
  }
}
