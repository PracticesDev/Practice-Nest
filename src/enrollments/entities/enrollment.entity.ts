import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Enrollment {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    estudianteId: number
    
    @Column()
    cursoId: number
    
    @Column()
    fechaMatricula:number

}
