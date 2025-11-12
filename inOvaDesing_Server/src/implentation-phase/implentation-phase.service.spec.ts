import { Test, TestingModule } from '@nestjs/testing';
import { ImplentationPhaseService } from './implentation-phase.service';

describe('ImplentationPhaseService', () => {
  let service: ImplentationPhaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImplentationPhaseService],
    }).compile();

    service = module.get<ImplentationPhaseService>(ImplentationPhaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
