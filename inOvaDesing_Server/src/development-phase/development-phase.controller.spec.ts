import { Test, TestingModule } from '@nestjs/testing';
import { DevelopmentPhaseController } from './development-phase.controller';
import { DevelopmentPhaseService } from './development-phase.service';

describe('DevelopmentPhaseController', () => {
  let controller: DevelopmentPhaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevelopmentPhaseController],
      providers: [DevelopmentPhaseService],
    }).compile();

    controller = module.get<DevelopmentPhaseController>(DevelopmentPhaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
