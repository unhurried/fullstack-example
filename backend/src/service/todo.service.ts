import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { TodoEntity } from '../entity/todo.entity';
import { Todo } from 'src/resource/todo';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async findAll(): Promise<Todo[]> {
    const entities = await this.todoRepository.find();
    return entities.map<Todo>(this.entityToDto);
  }

  async create(dto: Todo): Promise<Todo> {
    let entity = this.dtoToEntity(dto);
    entity.id = null;
    entity = await this.todoRepository.save(entity);
    return this.entityToDto(entity);
  }

  async findById(id: string): Promise<Todo> {
    const entity = await this.todoRepository.findOne(id);
    return entity? this.entityToDto(entity) : null
  }

  async update(dto: Todo): Promise<Todo> {
    const entity = await this.todoRepository.findOne(dto.id);
    if (entity) {
      let entity = this.dtoToEntity(dto);
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

  private dtoToEntity(dto: Todo): TodoEntity {
    const entity: TodoEntity = {
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
