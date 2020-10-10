import { Module } from '@nestjs/common';
import { DatabaseModule } from './module/database-module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TodoModule } from './module/todo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule.forRoot(),
    TodoModule,
    AuthModule,
    GraphQLModule.forRoot({ autoSchemaFile: true }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
