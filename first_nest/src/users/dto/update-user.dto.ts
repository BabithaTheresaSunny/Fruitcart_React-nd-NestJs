import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './createUserDto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  firstName: string;
  lastname: string;
}
