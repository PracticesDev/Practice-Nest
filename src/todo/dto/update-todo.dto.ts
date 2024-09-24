import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) { //hereda y lo hace opcional

    @IsBoolean()
    @IsOptional()
    done?: boolean;

}
