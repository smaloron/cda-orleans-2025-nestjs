import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello():  {message: string} {
    return this.appService.getHello();
  }

  @Get('hola')
  getHola():  {message: string} {
    return this.appService.getHola();
  }
}
