import { Test, TestingModule } from '@nestjs/testing';
import { DevelopmentPhaseService } from './development-phase.service';

describe('DevelopmentPhaseService', () => {
  let service: DevelopmentPhaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevelopmentPhaseService],
    }).compile();

    service = module.get<DevelopmentPhaseService>(DevelopmentPhaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
