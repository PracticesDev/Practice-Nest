import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentsController {

  
  constructor(private readonly studentsService: StudentsService) { }


  @Post()
  create(@Body() CreateStudentDto: CreateStudentDto) {
    console.log('Received DTO:', CreateStudentDto);
    return this.studentsService.create(CreateStudentDto);
  }


  // GET /Student - Obtiene todos los usuarios
  @Get()
  findAll() {
    return this.studentsService.findAll();
  }
  
  
  // GET /Student - Obtiene los usuarios por id
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.studentsService.findOne(id);
  }
  
  
  // PATCH /Student - Actualizar student por id
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.update(id, updateStudentDto);
  }
  
  // DELETE /Student - Eliminar student por id
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.studentsService.remove(id);
  }



  // GET / Obtener Estudiantes con Cursos
  @Get('/con-cursos')
  findAllWithCourses() {
    return this.studentsService.findAllWithCourses();
  }
    
}
