import { Controller, Get, Query } from '@nestjs/common';
import { Zodiac, ZodiacService } from './zodiac.service';

@Controller('zodiac')
export class ZodiacController {
  constructor(private service: ZodiacService) {}

  @Get()
  getZodiac(@Query('birthDate') birthDate: string): Zodiac[] | Zodiac {
    console.log(birthDate);
    try {
      if (birthDate) {
        return this.service.getZodiac(birthDate);
      }
      return this.service.getAllZodiacs();
    } catch (err) {
      console.error(err);
      return { name: 'Error', sign: '❌' };
    }
  }
}
