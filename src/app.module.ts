import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { TodoService } from './todo/todo.service';
import { Todo, TodoSchema } from './todo/schemas/todo.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/todo-app'),
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
