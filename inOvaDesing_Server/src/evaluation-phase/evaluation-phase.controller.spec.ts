import { Test, TestingModule } from '@nestjs/testing';
import { EvaluationPhaseController } from './evaluation-phase.controller';
import { EvaluationPhaseService } from './evaluation-phase.service';

describe('EvaluationPhaseController', () => {
  let controller: EvaluationPhaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EvaluationPhaseController],
      providers: [EvaluationPhaseService],
    }).compile();

    controller = module.get<EvaluationPhaseController>(EvaluationPhaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
