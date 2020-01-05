import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, HttpException, HttpStatus } from '@nestjs/common';
import { ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags, ApiQuery } from '@nestjs/swagger';
import { Todo } from '../resource/todo';
import { Error } from '../resource/error';
import { TodoList } from '../resource/todo-list';
import { ListQueryParam, LimitParamSchema, OffsetParamSchema } from '../param/list-qurey-param';
import { ItemParam } from '../param/item-param';
import { TodoService } from '../service/todo.service';

@ApiTags('Todo')
@Controller('todos')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @ApiOperation({ summary: 'Get a list of todo items' })
  @ApiOkResponse({ description: 'Success', type: TodoList })
  @ApiQuery({ name: 'Limit', required: false, schema: LimitParamSchema })
  @ApiQuery({ name: 'Offset', required: false, schema: OffsetParamSchema })
  @Get()
  async getList(@Query() listQueryParam: ListQueryParam): Promise<TodoList> {
    const items = await this.service.findAll();
    return { items: items, total: items.length };
  }

  @ApiOperation({ summary: 'Create a todo item' })
  @ApiCreatedResponse({ description: 'Success', type: Todo })
  @Post()
  async post(@Body() requestBody: Todo): Promise<Todo> {
    return await this.service.create(requestBody);
  }

  @ApiOperation({ summary: 'Get a todo item' })
  @ApiOkResponse({ description: 'Success', type: Todo })
  @ApiNotFoundResponse({ description: 'Resource not found', type: Error })
  @Get(':id')
  async get(@Param() params: ItemParam): Promise<Todo> {
    const dto = await this.service.findById(params.id);
    if (!dto) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    } else {
      return dto;
    }
  }

  @ApiOperation({ summary: 'Update a todo item' })
  @ApiOkResponse({ description: 'Success', type: Todo })
  @ApiNotFoundResponse({ description: 'Resource not found', type: Error })
  @Put(':id')
  async update(@Param() params: ItemParam, @Body() body: Todo): Promise<Todo> {
    body.id = params.id;
    const dto = await this.service.update(body);
    if (!dto) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    } else {
      return dto;
    }
  }

  @ApiOperation({ summary: 'Delete a todo item' })
  @ApiNoContentResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Resource not found', type: Error })
  @Delete(':id')
  @HttpCode(204)
  async delete(@Param() params: ItemParam): Promise<void> {
    if (!await this.service.deleteById(params.id)) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
