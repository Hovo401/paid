import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
// import { UsersModule } from './users/users.module';
// import { SessionModule } from './session/session.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [AuthModule, UserModule, MessageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
