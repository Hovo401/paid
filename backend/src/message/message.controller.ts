import { Controller, Get, Post, Body, Patch, Param, Delete,Request } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Public } from 'src/auth/constants';
import { Req } from 'src/interface/req.interfece';
import { email } from 'src/interface/message';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}


  @Post('/send')
  create( @Request() req: Req, @Body() createMessageDto: CreateMessageDto) {
    const userId = req.payload?.sub ?? -1;

    return this.messageService.create(userId , createMessageDto);
  }

  @Get()
  findAll(@Request() req: Req) {
    const userId = req.payload?.sub ?? -1;
    return this.messageService.findAll(userId);
  }

}
