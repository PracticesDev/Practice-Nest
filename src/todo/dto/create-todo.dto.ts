import { IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto {

    @IsString() // obliga que sea string
    @IsNotEmpty() // obliga un a llevar al menos un valor
    description: string;


}
