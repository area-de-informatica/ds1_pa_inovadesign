import { Test, TestingModule } from '@nestjs/testing';
import { AnalysisPhaseController } from './analysis-phase.controller';
import { AnalysisPhaseService } from './analysis-phase.service';

describe('AnalysisPhaseController', () => {
  let controller: AnalysisPhaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalysisPhaseController],
      providers: [AnalysisPhaseService],
    }).compile();

    controller = module.get<AnalysisPhaseController>(AnalysisPhaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
