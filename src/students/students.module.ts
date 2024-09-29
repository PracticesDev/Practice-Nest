import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';


import { CursosModule } from 'src/cursos/cursos.module';

@Module({
  imports: [TypeOrmModule.forFeature([Student]),
    CursosModule,
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule { }
