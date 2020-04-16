import { Module } from '@nestjs/common';
import { DatabaseModule } from './module/database-module';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './module/todo.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule.forRoot(), TodoModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
