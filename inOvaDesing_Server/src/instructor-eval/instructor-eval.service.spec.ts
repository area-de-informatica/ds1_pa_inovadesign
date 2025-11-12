import { Test, TestingModule } from '@nestjs/testing';
import { InstructorEvalService } from './instructor-eval.service';

describe('InstructorEvalService', () => {
  let service: InstructorEvalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstructorEvalService],
    }).compile();

    service = module.get<InstructorEvalService>(InstructorEvalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
