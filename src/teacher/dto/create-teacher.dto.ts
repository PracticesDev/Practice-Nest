import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateTeacherDto {

    @IsString() // obliga que sea string
    @IsNotEmpty() // obliga a llevar al menos un valor
    name: string

    
    @IsEmail() // valida que se una direccion de correo
    email:string;


}
