import { IsNotEmpty, IsString } from "class-validator"

export class CreateUserDto {


    id:number

    @IsString() // obliga que sea string
    @IsNotEmpty() // obliga a llevar al menos un valor
    firstName: string

    @IsString() // obliga que sea string
    @IsNotEmpty() // obliga un a llevar al menos un valor
    lastName: string

    isActive: boolean



}
