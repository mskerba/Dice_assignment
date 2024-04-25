import { Controller, Post, Body, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('books')
  async getAndSave() {
    try {
      const data = await this.appService.getAndSave();
      return data;
    } catch (error) { console.log('error retrieving data from the api', error,);}
  }
}
