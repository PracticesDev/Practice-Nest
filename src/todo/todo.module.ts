import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';



@Module({
  controllers: [TodoController], //nombre del recurso un controlador escucha y emite respuesta
  providers: [TodoService], // maneja la logica de negocio para el CRUD 
})
export class TodoModule {}
