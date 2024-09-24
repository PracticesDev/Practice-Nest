import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { StudentsModule } from './students/students.module';
import { Student } from './students/entities/student.entity';
import { CursosModule } from './cursos/cursos.module';
import { Curso } from './cursos/entities/curso.entity';
import { TeacherModule } from './teacher/teacher.module';
import { Teacher } from './teacher/entities/teacher.entity';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'root',
      password: 'root',
      database: 'todo_test',
      entities: [User,Student,Curso,Teacher],
      synchronize: true,
    }),
    //TodoModule, //vista CRUD TODO
    UserModule,
    StudentsModule,
    CursosModule,
    TeacherModule
  ],
  providers: [],
})
export class AppModule { }
