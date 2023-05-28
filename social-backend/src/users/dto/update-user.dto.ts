import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';



export class UpdateUserDto extends PartialType(CreateUserDto) {
  name: string;
  user: string;
  birthdate: string;
  email: string;
  password: string;
  profile_photo?: string;
}
