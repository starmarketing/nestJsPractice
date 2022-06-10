/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PhotoService } from './photo.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly photoService: PhotoService,
  ) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  async getHello(): Promise<string> {
    const value = await this.photoService
      .findAll()
      .then((x) =>x.filter((y) => y.name.toLowerCase().trim() === 'emad')[0].description);

    return value;
  }
}
