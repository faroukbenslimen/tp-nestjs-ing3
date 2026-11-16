import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('travel')
  findAll(): any {
    return this.appService.findAll();
  }

  
  @Post('app-name')
  getAppName(): string {
    return this.appService.getAppName();
  }
}