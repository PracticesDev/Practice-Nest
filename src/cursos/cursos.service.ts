import { Injectable } from '@nestjs/common';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from './entities/curso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursosService {

  constructor(
    @InjectRepository(Curso)
    private cursosRepository: Repository<Curso>,
  ) {}

  create(CreateCursoDto: Partial<Curso>): Promise<Curso> {
    const newCursos = this.cursosRepository.create(CreateCursoDto);
    return this.cursosRepository.save(newCursos);
  }

  findAll(): Promise<Curso[]> {
    return this.cursosRepository.find();
  }

  findOne(id: number): Promise<Curso | null> {
    return this.cursosRepository.findOneBy({ id });
  }

  async update(id: number, updateCursoDto: UpdateCursoDto): Promise<Curso> {
    await this.cursosRepository.update(id, updateCursoDto);
    return this.cursosRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.cursosRepository.delete(id);
  }
}
