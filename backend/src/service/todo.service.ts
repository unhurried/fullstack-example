import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from '../entity/todo.entity';
import { Todo } from '../resource/todo';
import { randomUUID } from 'crypto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async findAll(userId: string): Promise<Todo[]> {
    const entities = await this.todoRepository.find({where: {userId}});
    return entities.map<Todo>(this.createDto);
  }

  async create(userId: string, dto: Todo): Promise<Todo> {
    let entity = this.createEntity(userId, dto);
    entity.id = randomUUID();
    entity = await this.todoRepository.save(entity);
    return this.createDto(entity);
  }

  async findById(userId: string, id: string): Promise<Todo> {
    const entity = await this.todoRepository.findOne({ where: { id, userId } });
    return entity? this.createDto(entity) : null
  }

  async update(userId: string, dto: Todo): Promise<Todo> {
    const originalEntity = await this.todoRepository.findOne({ where: { id: dto.id, userId } });
    if (originalEntity) {
      let entity = this.updateEntity(originalEntity, dto);
      entity = await this.todoRepository.save(entity);
      return this.createDto(entity);
    } else {
      return null;
    }
  }

  async delete(userId: string, id: string): Promise<boolean> {
    const entity = await this.todoRepository.findOne({ where: { id, userId } });
    if (entity) {
      this.todoRepository.remove(entity);
      return true;
    } else {
      return false;
    }
  }

  private createDto(entity: TodoEntity): Todo {
    return {
      id: entity.id,
      title: entity.title,
      category: entity.category,
      content: entity.content,
    };
  }

  private createEntity(userId: string, dto: Todo): TodoEntity {
    const entity: TodoEntity = {
      userId,
      title: dto.title,
      category: dto.category,
      content: dto.content,
    };
    if (dto.id) {
      entity.id = dto.id;
    }

    return entity;
  }

  private updateEntity(entity: TodoEntity, dto: Todo): TodoEntity {
    entity.title = dto.title;
    entity.category = dto.category;
    entity.content = dto.content;
    return entity;
  }
}
