import { Test, TestingModule } from '@nestjs/testing';
import { EvaluationPhaseService } from './evaluation-phase.service';

describe('EvaluationPhaseService', () => {
  let service: EvaluationPhaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EvaluationPhaseService],
    }).compile();

    service = module.get<EvaluationPhaseService>(EvaluationPhaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
