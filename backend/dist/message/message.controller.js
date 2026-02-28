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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const common_1 = require("@nestjs/common");
const message_service_1 = require("./message.service");
const create_message_dto_1 = require("./dto/create-message.dto");
const mail_service_1 = require("../mail/mail.service");
const Date_1 = require("../utils/Date");
let MessageController = class MessageController {
    messageService;
    mailService;
    constructor(messageService, mailService) {
        this.messageService = messageService;
        this.mailService = mailService;
    }
    async create(req, createMessageDto) {
        const userId = req.payload?.sub ?? -1;
        const res = await this.messageService.create(userId, createMessageDto);
        if (res === '')
            return res;
        await this.mailService.sendMail(res.to.email, 'New Message in Paidemail', `You have a new message in Paidemail: ${createMessageDto.subject || 'Check your inbox!'}`, 'message-notification', {
            to_name: res.to.name || res.to.email.split('@')[0],
            to_email: res.to.email,
            from_name: res.from.name || res.from.name.split('@')[0],
            from_email: res.from.email,
            sentTime: (0, Date_1.dateForm)(Date.now()),
            messageSubject: createMessageDto.subject || '',
            messageContent: createMessageDto.message || 'No content provided',
            appUrl: 'https://diotek.xyz/paidemail/accaunt',
        });
        return res.from;
    }
    findAll(req) {
        const userId = req.payload?.sub ?? -1;
        return this.messageService.findAll(userId);
    }
};
exports.MessageController = MessageController;
__decorate([
    (0, common_1.Post)('/send'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_message_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], MessageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MessageController.prototype, "findAll", null);
exports.MessageController = MessageController = __decorate([
    (0, common_1.Controller)('message'),
    __metadata("design:paramtypes", [message_service_1.MessageService,
        mail_service_1.MailService])
], MessageController);
//# sourceMappingURL=message.controller.js.map