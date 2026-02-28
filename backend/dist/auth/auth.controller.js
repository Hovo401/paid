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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const constants_1 = require("./constants");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const mail_service_1 = require("../mail/mail.service");
let AuthController = class AuthController {
    authService;
    usersService;
    jwtService;
    mailService;
    constructor(authService, usersService, jwtService, mailService) {
        this.authService = authService;
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    signIn(signInDto) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }
    getProfile(req) {
        return this.usersService.findOne(req?.payload?.email ?? '');
    }
    async refresh(body) {
        body.password = await this.authService.hashPassword(body.password);
        const user = await this.usersService.createUser(body);
        const payload = { sub: user?.id, email: user?.email, roles: user?.roles };
        this.mailService.sendMail(user.email, 'Welcome to Paidemail', 'Thank you for registering with Paidemail!', 'welcome', {
            name: user.name || user.email.split('@')[0],
            email: user.email,
            appUrl: 'https://diotek.xyz/paidemail/',
        });
        return {
            user,
            access_token: 'Bearer ' + (await this.jwtService.signAsync(payload)),
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, constants_1.Public)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
__decorate([
    (0, constants_1.Public)(),
    (0, common_1.Post)('regoister'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map