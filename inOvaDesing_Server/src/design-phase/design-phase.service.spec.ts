import { Test, TestingModule } from '@nestjs/testing';
import { DesignPhaseService } from './design-phase.service';

describe('DesignPhaseService', () => {
  let service: DesignPhaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DesignPhaseService],
    }).compile();

    service = module.get<DesignPhaseService>(DesignPhaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
