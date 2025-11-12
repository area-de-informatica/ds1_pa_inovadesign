import { Test, TestingModule } from '@nestjs/testing';
import { ScoService } from './sco.service';

describe('ScoService', () => {
  let service: ScoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScoService],
    }).compile();

    service = module.get<ScoService>(ScoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
