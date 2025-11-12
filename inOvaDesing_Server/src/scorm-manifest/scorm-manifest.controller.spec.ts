import { Test, TestingModule } from '@nestjs/testing';
import { ScormManifestController } from './scorm-manifest.controller';
import { ScormManifestService } from './scorm-manifest.service';

describe('ScormManifestController', () => {
  let controller: ScormManifestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScormManifestController],
      providers: [ScormManifestService],
    }).compile();

    controller = module.get<ScormManifestController>(ScormManifestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
