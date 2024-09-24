import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  // GET /users - Obtiene todos los usuarios
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // GET /users/:id - Obtiene un usuario por ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(+id);  // Convertir el ID a número con +
  }

  // POST /users - Crea un nuevo usuario
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // PATCH /users - Actualizar un nuevo usuario

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  // DELETE /users/:id - Elimina un usuario por ID
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.userService.remove(+id);  // Convertir el ID a número
  }
}
