import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @Column()
    email: string;

    // Este campo es el que asociará el curso manualmente, sin relación formal
    @Column()  // Puedes permitir que sea null si algunos estudiantes no tienen curso asignado
    cursoId: number;

}


