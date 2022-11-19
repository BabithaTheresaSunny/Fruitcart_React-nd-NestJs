import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: Repository<User>);
    create2(createUserDto: CreateUserDto): Promise<User>;
    checkUser(username: string, passwd: string): Promise<User[]>;
    findAll(): Promise<User[]>;
    findOne(userid: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove2(id: number): Promise<import("typeorm").DeleteResult>;
}
