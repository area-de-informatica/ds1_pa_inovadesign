import { Test, TestingModule } from '@nestjs/testing';
import { DesignPhaseController } from './design-phase.controller';
import { DesignPhaseService } from './design-phase.service';

describe('DesignPhaseController', () => {
  let controller: DesignPhaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DesignPhaseController],
      providers: [DesignPhaseService],
    }).compile();

    controller = module.get<DesignPhaseController>(DesignPhaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
