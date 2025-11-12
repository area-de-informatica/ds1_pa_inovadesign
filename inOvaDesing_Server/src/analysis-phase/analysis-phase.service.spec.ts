import { Test, TestingModule } from '@nestjs/testing';
import { AnalysisPhaseService } from './analysis-phase.service';

describe('AnalysisPhaseService', () => {
  let service: AnalysisPhaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalysisPhaseService],
    }).compile();

    service = module.get<AnalysisPhaseService>(AnalysisPhaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
