import { AuthService } from './auth.service';
import { LoginDto } from './model/LoginDto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<import("./model/UserToken").UserToken>;
}
