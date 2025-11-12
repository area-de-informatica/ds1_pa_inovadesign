import { Test, TestingModule } from '@nestjs/testing';
import { ScormManifestService } from './scorm-manifest.service';

describe('ScormManifestService', () => {
  let service: ScormManifestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScormManifestService],
    }).compile();

    service = module.get<ScormManifestService>(ScormManifestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
