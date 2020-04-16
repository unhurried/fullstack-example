import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { TodoEntity } from '../entity/todo.entity';
import { Todo } from '../resource/todo';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async findAll(userId: string): Promise<Todo[]> {
    const entities = await this.todoRepository.find({userId});
    return entities.map<Todo>(this.entityToDto);
  }

  async create(userId: string, dto: Todo): Promise<Todo> {
    let entity = this.dtoToEntity(userId, dto);
    entity.id = null;
    entity = await this.todoRepository.save(entity);
    return this.entityToDto(entity);
  }

  async findById(userId: string, id: string): Promise<Todo> {
    const entity = await this.todoRepository.findOne({ id, userId });
    return entity? this.entityToDto(entity) : null
  }

  async update(userId: string, dto: Todo): Promise<Todo> {
    const originalEntity = await this.todoRepository.findOne({ id: dto.id, userId });
    if (originalEntity) {
      let entity = this.dtoToEntity(userId, dto);
      entity = await this.todoRepository.save(entity);
      return this.entityToDto(entity);
    } else {
      return null;
    }
  }

  async deleteById(id: string): Promise<boolean> {
    const entity = await this.todoRepository.findOne(id);
    if (entity) {
      this.todoRepository.remove(entity);
      return true;
    } else {
      return false;
    }
  }

  private entityToDto(entity: TodoEntity): Todo {
    return {
      id: entity.id.toString(),
      title: entity.title,
      category: entity.category,
      content: entity.content,
    };
  }

  private dtoToEntity(userId: string, dto: Todo): TodoEntity {
    const entity: TodoEntity = {
      userId,
      title: dto.title,
      category: dto.category,
      content: dto.content,
    };
    if (dto.id) {
      entity.id = ObjectID.createFromHexString(dto.id);
    }

    return entity;
  }
}
