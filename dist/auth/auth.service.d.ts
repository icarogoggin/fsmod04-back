import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { LoginDto } from './model/LoginDto';
import { UserToken } from './model/UserToken';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    login(dto: LoginDto): Promise<UserToken>;
    validateUser(email: string, password: string): Promise<User>;
}
