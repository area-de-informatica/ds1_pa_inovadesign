import { Test, TestingModule } from '@nestjs/testing';
import { ImplentationPhaseController } from './implentation-phase.controller';
import { ImplentationPhaseService } from './implentation-phase.service';

describe('ImplentationPhaseController', () => {
  let controller: ImplentationPhaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImplentationPhaseController],
      providers: [ImplentationPhaseService],
    }).compile();

    controller = module.get<ImplentationPhaseController>(ImplentationPhaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
