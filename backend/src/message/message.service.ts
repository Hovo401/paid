import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { PrismaService } from '../prisma/prisma.service';
import type { email } from 'src/interface/message';

@Injectable()
export class MessageService {
  constructor(private prisma: PrismaService) {}

  async create(seningUserId: number, body: CreateMessageDto) {
    const userData = await this.prisma.user.findFirst({
      where: { id: body.id },
    });
    const inUser = await this.prisma.user.findFirst({
      where: { id: seningUserId },
    });
    if (!inUser || !userData) return '';
    const inbox = JSON.parse(userData?.inbox ?? '');
    const send = JSON.parse(userData?.send ?? '');

    const email: email = {
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
    await this.prisma.user.update({
      where: { id: seningUserId },
      data: {
        send: JSON.stringify(send),
      },
    });

    inbox.push(email);
    return await this.prisma.user.update({
      where: { id: body.id },
      data: {
        inbox: JSON.stringify(inbox),
      },
    });
  }

  async findAll(seningUserId: number) {
    const userData = await this.prisma.user.findFirst({
      where: { id: seningUserId },
    });

    return {
      inbox: userData?.inbox,
      draft: userData?.draft,
      send: userData?.send,
    };
  }
}
