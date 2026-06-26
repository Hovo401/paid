import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
// import { UsersModule } from './users/users.module';
// import { SessionModule } from './session/session.module';
import { MessageModule } from './message/message.module';
import { ConfigModule } from '@nestjs/config';
import { HealthController } from './health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    AuthModule,
    UserModule,
    MessageModule,
  ],
  controllers: [HealthController],
  providers: [],
})
export class AppModule {}
