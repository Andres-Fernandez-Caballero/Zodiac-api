import { Test, TestingModule } from '@nestjs/testing';
import { ZodiacController } from './zodiac.controller';

describe('ZodiacController', () => {
  let controller: ZodiacController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ZodiacController],
    }).compile();

    controller = module.get<ZodiacController>(ZodiacController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
