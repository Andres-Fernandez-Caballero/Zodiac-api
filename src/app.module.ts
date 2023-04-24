import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZodiacController } from './zodiac/zodiac.controller';
import { ZodiacService } from './zodiac/zodiac.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, ZodiacController],
  providers: [AppService, ZodiacService],
})
export class AppModule {}
