import { CreateMessageDto } from './dto/create-message.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class MessageService {
    private prisma;
    constructor(prisma: PrismaService);
    create(seningUserId: number, body: CreateMessageDto): Promise<"" | {
        to: {
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
        from: {
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
    }>;
    findAll(seningUserId: number): Promise<{
        inbox: string | undefined;
        draft: string | undefined;
        send: string | undefined;
    }>;
}
