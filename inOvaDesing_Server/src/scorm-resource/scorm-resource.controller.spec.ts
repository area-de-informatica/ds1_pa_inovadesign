import { Test, TestingModule } from '@nestjs/testing';
import { ScormResourceController } from './scorm-resource.controller';
import { ScormResourceService } from './scorm-resource.service';

describe('ScormResourceController', () => {
  let controller: ScormResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScormResourceController],
      providers: [ScormResourceService],
    }).compile();

    controller = module.get<ScormResourceController>(ScormResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
