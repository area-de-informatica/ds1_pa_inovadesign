import { Test, TestingModule } from '@nestjs/testing';
import { ScoController } from './sco.controller';
import { ScoService } from './sco.service';

describe('ScoController', () => {
  let controller: ScoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScoController],
      providers: [ScoService],
    }).compile();

    controller = module.get<ScoController>(ScoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
