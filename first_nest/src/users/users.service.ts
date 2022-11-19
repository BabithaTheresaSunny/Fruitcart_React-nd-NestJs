import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  async create2(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto);
    return await this.userRepo.save(user);
  }

  checkUser(username: string, passwd: string) {
    return this.userRepo.find({
      where: { userName: username, password: passwd },
    });
  }

  findAll() {
    return this.userRepo.find();
  }

  async findOne(userid: number) {
    return await this.userRepo.findOne({
      where: { id: userid },
      relations: ['notes'],
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(id, updateUserDto);
  }

  async remove2(id: number) {
    const del = await this.userRepo.delete(id);
    console.log(del);
    return del;
  }
}
