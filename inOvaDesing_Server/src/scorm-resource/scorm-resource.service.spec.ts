import { Test, TestingModule } from '@nestjs/testing';
import { ScormResourceService } from './scorm-resource.service';

describe('ScormResourceService', () => {
  let service: ScormResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScormResourceService],
    }).compile();

    service = module.get<ScormResourceService>(ScormResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
