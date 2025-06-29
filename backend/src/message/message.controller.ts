import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { Req } from 'src/interface/req.interfece';
import { MailService } from 'src/mail/mail.service';
import { dateForm } from 'src/utils/Date';

@Controller('message')
export class MessageController {
  constructor(
    private readonly messageService: MessageService,
    private mailService: MailService,
  ) {}

  @Post('/send')
  async create(
    @Request() req: Req,
    @Body() createMessageDto: CreateMessageDto,
  ) {
    const userId = req.payload?.sub ?? -1;
    const res = await this.messageService.create(userId, createMessageDto);
    if (res === '') return res;

    await this.mailService.sendMail(
      res.to.email,
      'New Message in Paidemail',
      `You have a new message in Paidemail: ${createMessageDto.subject || 'Check your inbox!'}`,
      'message-notification',
      {
        to_name: res.to.name || res.to.email.split('@')[0],
        to_email: res.to.email,
        from_name: res.from.name || res.from.name.split('@')[0],
        from_email: res.from.email,
        sentTime: dateForm(Date.now()),
        messageSubject: createMessageDto.subject || '',
        messageContent: createMessageDto.message || 'No content provided',
        appUrl: 'https://diotek.xyz/paidemail/accaunt',
      },
    );

    return res.from;
  }

  @Get()
  findAll(@Request() req: Req) {
    const userId = req.payload?.sub ?? -1;
    return this.messageService.findAll(userId);
  }
}
