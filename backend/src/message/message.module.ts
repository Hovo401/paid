import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MailService } from '../mail/mail.service';

@Module({
  imports: [PrismaModule],
  controllers: [MessageController],
  providers: [MessageService, MailService],
})
export class MessageModule {}
