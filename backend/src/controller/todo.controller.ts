import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, HttpException, HttpStatus, UseGuards, Req } from '@nestjs/common';
import { ApiCreatedResponse, ApiNoContentResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags, ApiQuery } from '@nestjs/swagger';
import { Todo } from '../resource/todo';
import { Error } from '../resource/error';
import { TodoList } from '../resource/todo-list';
import { ListQueryParam, LimitParamSchema, OffsetParamSchema } from '../param/list-qurey-param';
import { ItemParam } from '../param/item-param';
import { TodoService } from '../service/todo.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { AuthenticatedRequest } from 'src/auth/resource/authenticated-request';

@ApiTags('Todo')
@UseGuards(JwtAuthGuard)
@Controller('todos')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @ApiOperation({ summary: 'Get a list of todo items' })
  @ApiOkResponse({ description: 'Success', type: TodoList })
  @ApiQuery({ name: 'Limit', required: false, description: 'Maximum number of items to get', schema: LimitParamSchema, })
  @ApiQuery({ name: 'Offset', required: false, description: 'Starting index of items to get', schema: OffsetParamSchema })
  @Get()
  async getList(@Query() listQueryParam: ListQueryParam, @Req() req: AuthenticatedRequest): Promise<TodoList> {
    const userId = req.user.userId;
    const items = await this.service.findAll(userId);
    return {items, total: items.length};
  }

  @ApiOperation({ summary: 'Create a todo item' })
  @ApiCreatedResponse({ description: 'Success', type: Todo })
  @Post()
  async post(@Body() requestBody: Todo, @Req() req: AuthenticatedRequest): Promise<Todo> {
    const userId = req.user.userId;
    return await this.service.create(userId, requestBody);
  }

  @ApiOperation({ summary: 'Get a todo item' })
  @ApiOkResponse({ description: 'Success', type: Todo })
  @ApiNotFoundResponse({ description: 'Resource not found', type: Error })
  @Get(':id')
  async get(@Param() params: ItemParam, @Req() req: AuthenticatedRequest): Promise<Todo> {
    const userId = req.user.userId;
    const dto = await this.service.findById(userId, params.id);
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
  async update(@Param() params: ItemParam, @Body() body: Todo, @Req() req: AuthenticatedRequest): Promise<Todo> {
    const userId = req.user.userId;
    body.id = params.id;
    const dto = await this.service.update(userId, body);
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
