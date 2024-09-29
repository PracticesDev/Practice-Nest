import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { UpdateStudentDto } from './dto/update-student.dto';
import { CursosService } from 'src/cursos/cursos.service';


@Injectable()
export class StudentsService {

constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
    private cursosService: CursosService, // Inyeccion desde servicios cursos
  ) {}

  create(CreateStudentDto: Partial<Student>): Promise<Student> {
    const newStudents = this.studentsRepository.create(CreateStudentDto);
    return this.studentsRepository.save(newStudents);
  }

  findAll(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  findOne(id: number): Promise<Student | null> {
    return this.studentsRepository.findOneBy({ id });
  }

  async update(id: number, updateUserDto: UpdateStudentDto): Promise<Student> {
    await this.studentsRepository.update(id, updateUserDto);
    return this.studentsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.studentsRepository.delete(id);
  }

  //Integracion entre tablas (Que cursos tienen los estudiantes)

  async findAllWithCourses() {
    const estudiantes = await this.studentsRepository.find();
    const estudiantesConCursos = await Promise.all(estudiantes.map(async (estudiante) => {
      const curso = await this.cursosService.findOne(estudiante.cursoId); // Obtenemos el curso asociado
      return {
        ...estudiante,
        curso,
      };
    }));

    return estudiantesConCursos;
  }


}
