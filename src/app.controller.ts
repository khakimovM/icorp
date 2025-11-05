import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiQuery, ApiBody } from '@nestjs/swagger';

@ApiTags('ICorp')
@Controller('icorp')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({ summary: 'Jarayonni boshlash (birinchi qismni olish)' })
  @ApiQuery({ name: 'text', required: true, description: 'Yuboriladigan matn' })
  @Get('start')
  async getTest(@Query('text') msg: string) {
    await this.appService.start(msg);
    return { message: 'success' };
  }

  @ApiOperation({ summary: 'Ikkinchi qismni olish uchun endpoint' })
  @ApiBody({ schema: { example: { part2: 'ikkinchi-qism' } } })
  @Post('second-part')
  async secondPart(@Body() body: { part2: string }) {
    await this.appService.getSecondPart(body);
    setTimeout(() => {
      this.appService.processCode();
    }, 1000);
    return;
  }

  @ApiOperation({ summary: 'Server test endpointi' })
  @Get()
  async getHello() {
    return 'Test server ishlayabdi';
  }

  @ApiOperation({ summary: 'Final natijani olish' })
  @Get('final')
  async getFinalMessage() {
    return await this.appService.getFinalMessage();
  }
}
