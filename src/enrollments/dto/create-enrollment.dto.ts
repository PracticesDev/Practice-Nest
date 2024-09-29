import { IsDate, IsInt } from "class-validator"

export class CreateEnrollmentDto {

    @IsInt()
    estudianteId: number
    
    @IsInt()
    cursoId: number
    
    @IsDate()
    fechaMatricula:number



}
