import { AuthService } from './auth.service';
import { User } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Req } from 'src/interface/req.interfece';
import { MailService } from '../mail/mail.service';
export declare class AuthController {
    private authService;
    private usersService;
    private jwtService;
    private mailService;
    constructor(authService: AuthService, usersService: UsersService, jwtService: JwtService, mailService: MailService);
    signIn(signInDto: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
    }>;
    getProfile(req: Req): Promise<{
        id: number;
        email: string;
        name: string;
        firstName: string;
        age: number;
        Bio: string;
        avatarURL: string | null;
        rating: number;
        pricePerOneMessage: number | null;
        location: string | null;
        profession: string | null;
        hor: number | null;
        birthday: Date | null;
        inbox: string;
        send: string;
        draft: string;
        gender: import(".prisma/client").$Enums.Gender;
        password: string;
        roles: import(".prisma/client").$Enums.Role;
        blocked: boolean;
        createdAt: Date;
    } | null>;
    refresh(body: User): Promise<{
        user: {
            id: number;
            email: string;
            name: string;
            firstName: string;
            age: number;
            Bio: string;
            avatarURL: string | null;
            rating: number;
            pricePerOneMessage: number | null;
            location: string | null;
            profession: string | null;
            hor: number | null;
            birthday: Date | null;
            inbox: string;
            send: string;
            draft: string;
            gender: import(".prisma/client").$Enums.Gender;
            password: string;
            roles: import(".prisma/client").$Enums.Role;
            blocked: boolean;
            createdAt: Date;
        };
        access_token: string;
    }>;
}
