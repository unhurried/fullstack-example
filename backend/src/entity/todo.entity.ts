import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';
import { Category } from '../resource/todo';

@Entity()
export class TodoEntity {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  title: string;

  @Column()
  category: Category;

  @Column('text')
  content?: string;
}
