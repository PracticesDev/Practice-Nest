import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Curso {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    descripcion:string

    //@Column()
    //profesorIdF:number


}
