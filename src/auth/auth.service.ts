import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { LoginDto } from './model/LoginDto';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './model/UserPayload';
import { UserToken } from './model/UserToken';
import { UnauthorizedError } from 'src/errors/unauthorized.error';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto): Promise<UserToken> {
    const user: User = await this.validateUser(dto.email, dto.password);

    const payload: UserPayload = {
      sub: user.id,
      username: user.email,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user: User = await this.usersService.findEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }
}
