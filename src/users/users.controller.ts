import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.interface';

@Controller('v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): User[] {
    console.log('Versuche users zu laden aus:');
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): User {
    const user = this.usersService.getUserById(id);
    if (!user) {
      throw new NotFoundException(`User mit ID ${id} nicht gefunden`);
    }
    return user;
  }
}
