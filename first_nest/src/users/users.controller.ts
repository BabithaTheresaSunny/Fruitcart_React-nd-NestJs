import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('addUser')
  create3(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create2(createUserDto);
  }

  @Post('findUser')
  findUSer(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.usersService.checkUser(username, password);
  }
  // console.log(userdetails[0].id);
  // return userdetails[0].id;
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove2(+id);
  }
}
