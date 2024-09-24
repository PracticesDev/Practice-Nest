import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { UpdateStudentDto } from './dto/update-student.dto';


@Injectable()
export class StudentsService {

constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
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
}
