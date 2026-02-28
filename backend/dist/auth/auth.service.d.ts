import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    hashPassword(password: string): Promise<string>;
    signIn(email: string, pass: string): Promise<{
        access_token: string;
    }>;
    validateUser(email: string, password: string): Promise<User | null>;
}
