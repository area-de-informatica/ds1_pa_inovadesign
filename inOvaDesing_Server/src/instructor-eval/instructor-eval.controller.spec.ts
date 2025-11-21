import { Test, TestingModule } from '@nestjs/testing';
import { InstructorEvalController } from './instructor-eval.controller';
import { InstructorEvaluationService } from './instructor-eval.service';

describe('InstructorEvalController', () => {
  let controller: InstructorEvalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstructorEvalController],
      providers: [InstructorEvaluationService],
    }).compile();

    controller = module.get<InstructorEvalController>(InstructorEvalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
