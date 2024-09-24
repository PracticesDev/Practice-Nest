import { IsNotEmpty, IsString } from "class-validator"

export class CreateCursoDto {

    @IsString() // obliga que sea string
    @IsNotEmpty() // obliga a llevar al menos un valor
    name: string

    @IsString() // obliga que sea string
    @IsNotEmpty() // obliga a llevar al menos un valor
    descripcion:string

    //profesorIdF:number



}
