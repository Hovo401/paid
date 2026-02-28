"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MessageService = class MessageService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(seningUserId, body) {
        const userData = await this.prisma.user.findFirst({
            where: { id: body.id },
        });
        const inUser = await this.prisma.user.findFirst({
            where: { id: seningUserId },
        });
        if (!inUser || !userData)
            return '';
        const inbox = JSON.parse(userData?.inbox ?? '[]');
        const send = JSON.parse(userData?.send ?? '[]');
        const email = {
            in: {
                id: inUser.id,
                name: inUser.name,
                email: inUser.email,
            },
            to: {
                id: userData.id,
                name: userData.name,
                email: userData.email,
            },
            subject: body.subject,
            message: body.message,
        };
        send.push(email);
        const from = await this.prisma.user.update({
            where: { id: seningUserId },
            data: {
                send: JSON.stringify(send),
            },
        });
        inbox.push(email);
        return { to: await this.prisma.user.update({
                where: { id: body.id },
                data: {
                    inbox: JSON.stringify(inbox),
                },
            }),
            from };
    }
    async findAll(seningUserId) {
        const userData = await this.prisma.user.findFirst({
            where: { id: seningUserId },
        });
        return {
            inbox: userData?.inbox,
            draft: userData?.draft,
            send: userData?.send,
        };
    }
};
exports.MessageService = MessageService;
exports.MessageService = MessageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MessageService);
//# sourceMappingURL=message.service.js.map