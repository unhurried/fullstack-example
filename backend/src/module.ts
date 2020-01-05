import { Module } from '@nestjs/common';
import { DatabaseModule } from './module/database-module';
import { TodoModule } from './module/todo.module';

@Module({
  imports: [DatabaseModule.forRoot(), TodoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
