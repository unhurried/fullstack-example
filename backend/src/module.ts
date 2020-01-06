import { Module } from '@nestjs/common';
import { DatabaseModule } from './module/database-module';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './module/todo.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule.forRoot(), TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
