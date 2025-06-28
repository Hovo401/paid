import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/enums/role.enum';
import { Public } from 'src/auth/constants';
import { signInDto } from 'src/auth/dto/signInDto';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get()
  @Public()
  getUsers() {
    return this.UserService.getUsers();
  }

  @Post()
  @Public()
  createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.UserService.createUser(name, email, password);
  }

  @Delete(':id')
  @Public()
  deleteUser(@Param('id') id: number) {
    return this.UserService.deleteUser(Number(id));
  }

  @Put(':id')
  @Public()
  updateUser(
    @Param('id') id: number,
    @Body() body: signInDto,
  ) {
    return this.UserService.updateUser(Number(id), body);
  }
}
