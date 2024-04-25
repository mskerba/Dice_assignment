import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('get-data')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async readFile() {
    return await this.appService.readBookData();
  }
}