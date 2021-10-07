import { Prisma } from '.prisma/client';
import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';
import { User } from '../entities/user.entity';


export class CreateUserDto extends User {
  @IsString({message: 'The name must be string type.'})
  @IsNotEmpty({message: 'The name must not be empty.'})
  name: string;
  @IsString({message: 'The last name must be string type.'})
  @IsNotEmpty({message: 'The last name must not be empty.'})
  lastName: string;
  @IsNotEmpty({message: 'The e-mail must not be empty.'})
  @IsEmail()
  email: string;
  @IsString({message: 'The password must be string type.'})
  @IsNotEmpty({message: 'The password must not be empty.'})
  password: string;
  @IsString({message: 'The CPF must be string type.'})
  @IsNotEmpty({message: 'The CPF must not be empty.'})
  cpf: string;
  @IsOptional()
  profiles?: Prisma.ProfileUncheckedCreateNestedManyWithoutUserInput;
}