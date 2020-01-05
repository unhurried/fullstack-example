import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { TodoEntity } from '../entity/todo.entity';

@Module({})
export class DatabaseModule {
  static async forRoot(entities = [], options?): Promise<DynamicModule> {
    const mongod = new MongoMemoryServer();

    return TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: await mongod.getPort(),
      username: 'root',
      database: await mongod.getDbName(),
      entities: [TodoEntity],
      synchronize: true,
    })
  }
}