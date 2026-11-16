import { Controller, Get, Post ,Param} from '@nestjs/common';
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

  @Get('travel/:id')
  findOne(@Param('id') id: string): any {
    return this.appService.findOne(parseInt(id, 10));
  }

  @Post('app-name')
  getAppName(): string {
    return this.appService.getAppName();
  }
}