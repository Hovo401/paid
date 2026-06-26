import { Controller, Get } from '@nestjs/common';
import { Public } from './auth/constants';

@Controller('health')
export class HealthController {
  @Get()
  @Public()
  check() {
    return { status: 'ok' };
  }
}
