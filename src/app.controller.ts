import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AllatDTO } from './allat.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Get()
  @Render('allatkertForm')
  main(): object {
    return {};
  }

  @Post()
  @Render('allat')
  handleAllatForm(@Body() body : AllatDTO) {
    return body;
  }
}
